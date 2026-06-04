#include "ediabasx/serial.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>
#include <sys/select.h>
#include <time.h>

#define FRAME_MAX 1024
#define ADD_REC_TIMEOUT 20
#define ECHO_TIMEOUT    250

struct edxn_serial {
    edxn_transport_t base;
    int fd;
    bool connected;
    char port[256];

    uint16_t concept;
    uint32_t baud_rate;
    uint32_t timeout_std;
    uint32_t regen_time;
    uint32_t timeout_tel_end;
    uint32_t interbyte_time;
    bool     checksum_by_user;
    bool     checksum_no_check;
    bool     has_echo;
    bool     even_parity;
    uint8_t  comm_repeats;

    uint16_t adapter_type;
    uint16_t adapter_version;
    bool     is_kdcan;

    uint64_t last_activity;
};

/* ── Helpers ─────────────────────────────────────────────────────────── */

static uint64_t now_ms(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (uint64_t)ts.tv_sec * 1000 + (uint64_t)ts.tv_nsec / 1000000;
}

static void sleep_ms(uint32_t ms) {
    if (ms == 0) return;
    struct timespec ts = { .tv_sec = ms / 1000, .tv_nsec = (long)(ms % 1000) * 1000000L };
    nanosleep(&ts, NULL);
}

static uint8_t xor_checksum(const uint8_t *data, size_t len) {
    uint8_t cs = 0;
    for (size_t i = 0; i < len; i++) cs ^= data[i];
    return cs;
}

static ssize_t timed_read(int fd, uint8_t *buf, size_t count, uint32_t timeout_ms) {
    size_t total = 0;
    uint64_t deadline = now_ms() + timeout_ms;
    while (total < count) {
        uint64_t now = now_ms();
        if (now >= deadline) break;
        int remain = (int)(deadline - now);
        fd_set rfds;
        FD_ZERO(&rfds);
        FD_SET(fd, &rfds);
        struct timeval tv = { .tv_sec = remain / 1000, .tv_usec = (remain % 1000) * 1000 };
        if (select(fd + 1, &rfds, NULL, NULL, &tv) <= 0) break;
        ssize_t n = read(fd, buf + total, count - total);
        if (n <= 0) break;
        total += (size_t)n;
    }
    return (ssize_t)total;
}

static speed_t baud_constant(uint32_t baud) {
    switch (baud) {
    case 300:    return B300;
    case 1200:   return B1200;
    case 2400:   return B2400;
    case 4800:   return B4800;
    case 9600:   return B9600;
    case 19200:  return B19200;
    case 38400:  return B38400;
    case 57600:  return B57600;
    case 115200: return B115200;
    case 230400: return B230400;
    default:     return B9600;
    }
}

static int apply_config(edxn_serial_t *s) {
    if (s->is_kdcan) return 0; /* UART stays at 115200 8N1; K-line params go in adapter telegrams */
    struct termios tio;
    if (tcgetattr(s->fd, &tio) < 0) return -1;

    cfmakeraw(&tio);
    speed_t sp = baud_constant(s->baud_rate);
    cfsetispeed(&tio, sp);
    cfsetospeed(&tio, sp);

    tio.c_cflag &= ~CSIZE;
    tio.c_cflag |= CS8 | CLOCAL | CREAD;

    if (s->even_parity) {
        tio.c_cflag |= PARENB;
        tio.c_cflag &= ~PARODD;
    } else {
        tio.c_cflag &= ~PARENB;
    }

    tio.c_cflag &= ~(CSTOPB | CRTSCTS);
    tio.c_cc[VMIN]  = 0;
    tio.c_cc[VTIME] = 0;

    return tcsetattr(s->fd, TCSANOW, &tio);
}

/* ── K+DCAN adapter ─────────────────────────────────────────────────── */

static uint8_t bmw_fast_checksum(const uint8_t *data, size_t len) {
    uint8_t sum = 0;
    for (size_t i = 0; i < len; i++) sum += data[i];
    return sum;
}

static bool send_probe(int fd, const uint8_t *tel, size_t tel_len,
                        uint8_t *resp, size_t resp_len, uint32_t timeout_ms) {
    uint8_t buf[64];
    size_t total = tel_len + resp_len;
    if (total > sizeof(buf)) return false;

    tcflush(fd, TCIFLUSH);
    if (write(fd, tel, tel_len) != (ssize_t)tel_len) return false;
    tcdrain(fd);

    ssize_t n = timed_read(fd, buf, total, timeout_ms);
    if ((size_t)n < total) return false;
    if (memcmp(buf, tel, tel_len) != 0) return false;

    memcpy(resp, buf + tel_len, resp_len);
    uint8_t expected = bmw_fast_checksum(resp, resp_len - 1);
    return resp[resp_len - 1] == expected;
}

static void probe_adapter(edxn_serial_t *s) {
    uint8_t resp[16];

    /* Ignition probe — wakes the adapter; OK to fail on dumb cables */
    uint8_t ign[] = {0x82, 0xF1, 0xF1, 0xFE, 0xFE, 0x00};
    ign[5] = bmw_fast_checksum(ign, 5);
    send_probe(s->fd, ign, 6, resp, 6, 1000);

    /* Escape-mode probe — needed for adapter to leave boot/idle state */
    uint8_t esc[] = {0x84, 0xF1, 0xF1, 0x06, 0x55, 0xAA, 0xD5, 0x00};
    esc[7] = bmw_fast_checksum(esc, 7);
    send_probe(s->fd, esc, 8, resp, 8, 1000);

    /* Firmware probe — gets adapter type + version */
    uint8_t fw[] = {0x82, 0xF1, 0xF1, 0xFD, 0xFD, 0x00};
    fw[5] = bmw_fast_checksum(fw, 5);
    if (!send_probe(s->fd, fw, 6, resp, 9, 1000)) {
        s->is_kdcan = false;
        if (getenv("EDXN_TRACE"))
            fprintf(stderr, "[ds2] adapter probe failed — assuming passthrough FTDI\n");
        return;
    }

    s->adapter_type    = ((uint16_t)resp[4] << 8) | resp[5];
    s->adapter_version = ((uint16_t)resp[6] << 8) | resp[7];
    s->is_kdcan        = (s->adapter_type >= 0x0002);

    if (getenv("EDXN_TRACE"))
        fprintf(stderr, "[ds2] adapter: type=0x%04X version=0x%04X kdcan=%d\n",
                s->adapter_type, s->adapter_version, s->is_kdcan);
}

static size_t wrap_adapter_telegram(edxn_serial_t *s,
                                     const uint8_t *payload, size_t payload_len,
                                     uint8_t *out, size_t out_cap) {
    int tel_type = (s->adapter_version >= 0x0008) ? 0x02 : 0x00;
    size_t overhead = (tel_type == 0x00) ? 9 : 11;
    size_t total = payload_len + overhead;
    if (total > out_cap) return 0;

    uint16_t baud_half = 0;
    uint8_t flags1 = 0x20; /* KLINEF1_NO_ECHO */
    if (s->baud_rate != 115200) {
        baud_half = (uint16_t)(s->baud_rate >> 1);
        flags1 |= 0x08; /* KLINEF1_USE_LLINE */
        if (s->even_parity) flags1 |= 0x01; /* KLINEF1_PARITY_EVEN */
    }

    out[0] = 0x00;
    out[1] = (uint8_t)tel_type;
    out[2] = (baud_half >> 8) & 0xFF;
    out[3] = baud_half & 0xFF;
    out[4] = flags1;

    if (tel_type == 0x00) {
        out[5] = (uint8_t)(s->interbyte_time & 0xFF);
        out[6] = (payload_len >> 8) & 0xFF;
        out[7] = payload_len & 0xFF;
        memcpy(out + 8, payload, payload_len);
    } else {
        out[5] = 0x00; /* flags2 */
        out[6] = (uint8_t)(s->interbyte_time & 0xFF);
        out[7] = 60;   /* KWP1281_TIMEOUT */
        out[8] = (payload_len >> 8) & 0xFF;
        out[9] = payload_len & 0xFF;
        memcpy(out + 10, payload, payload_len);
    }

    out[total - 1] = bmw_fast_checksum(out, total - 1);
    return total;
}

/* ── DS2 send / receive ──────────────────────────────────────────────── */

static void ds2_trace(const char *tag, const uint8_t *data, size_t len) {
    if (!getenv("EDXN_TRACE")) return;
    fprintf(stderr, "[ds2] %s (%zu):", tag, len);
    for (size_t i = 0; i < len && i < 64; i++) fprintf(stderr, " %02X", data[i]);
    if (len > 64) fprintf(stderr, " ...");
    fprintf(stderr, "\n");
}

static edxn_error_t ds2_exchange(edxn_serial_t *s,
                                  const uint8_t *req, size_t req_len,
                                  uint8_t *resp, size_t *resp_len, size_t resp_cap) {
    uint8_t frame[FRAME_MAX + 1];
    if (req_len > FRAME_MAX) return EDXN_ERR_TRANSPORT;
    memcpy(frame, req, req_len);
    size_t frame_len = req_len;

    if (!s->checksum_by_user) {
        frame[frame_len] = xor_checksum(frame, frame_len);
        frame_len++;
    }

    /* Enforce regen time */
    if (s->regen_time > 0 && s->last_activity > 0) {
        uint64_t elapsed = now_ms() - s->last_activity;
        if (elapsed < s->regen_time)
            sleep_ms((uint32_t)(s->regen_time - elapsed));
    }

    tcflush(s->fd, TCIFLUSH);

    ds2_trace("tx", frame, frame_len);

    if (s->is_kdcan) {
        /* K+DCAN: wrap DS2 frame in adapter telegram */
        uint8_t tel[FRAME_MAX + 12];
        size_t tel_len = wrap_adapter_telegram(s, frame, frame_len, tel, sizeof(tel));
        if (tel_len == 0) return EDXN_ERR_TRANSPORT;
        ds2_trace("adapter-tx", tel, tel_len);
        ssize_t w = write(s->fd, tel, tel_len);
        if (w < 0 || (size_t)w != tel_len) return EDXN_ERR_TRANSPORT;
        tcdrain(s->fd);
        /* No echo — cable suppresses it via KLINEF1_NO_ECHO */
    } else {
        /* Dumb FTDI: send raw DS2 frame */
        if (s->interbyte_time > 0) {
            for (size_t i = 0; i < frame_len; i++) {
                if (write(s->fd, &frame[i], 1) != 1) return EDXN_ERR_TRANSPORT;
                tcdrain(s->fd);
                if (i < frame_len - 1) sleep_ms(s->interbyte_time);
            }
        } else {
            ssize_t w = write(s->fd, frame, frame_len);
            if (w < 0 || (size_t)w != frame_len) return EDXN_ERR_TRANSPORT;
            tcdrain(s->fd);
        }

        /* Consume K-line echo (dumb FTDI only) */
        if (s->has_echo) {
            uint8_t echo[FRAME_MAX + 1];
            ssize_t n = timed_read(s->fd, echo, frame_len, ECHO_TIMEOUT + ADD_REC_TIMEOUT);
            ds2_trace("echo", echo, (size_t)(n > 0 ? n : 0));
            if ((size_t)n != frame_len) {
                if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] echo short: got %zd, want %zu\n", n, frame_len);
                return EDXN_ERR_TRANSPORT;
            }
            if (memcmp(echo, frame, frame_len) != 0) {
                if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] echo mismatch\n");
                return EDXN_ERR_TRANSPORT;
            }
        }
    }

    /* Read response header */
    int hdr_len = (s->concept == 0x0001) ? 3 : 2;
    uint8_t hdr[3] = {0};
    ssize_t n = timed_read(s->fd, hdr, (size_t)hdr_len, s->timeout_std + ADD_REC_TIMEOUT);
    if (n != hdr_len) {
        if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] hdr short: got %zd, want %d (timeout=%u)\n", n, hdr_len, s->timeout_std);
        return EDXN_ERR_TRANSPORT;
    }
    ds2_trace("hdr", hdr, (size_t)hdr_len);

    /* Total telegram length from header */
    int total = (s->concept == 0x0001) ? (int)hdr[2] : (int)hdr[1];
    if (total < hdr_len || (size_t)total > resp_cap) {
        if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] bad length: total=%d hdr=%d cap=%zu\n", total, hdr_len, resp_cap);
        return EDXN_ERR_TRANSPORT;
    }

    memcpy(resp, hdr, (size_t)hdr_len);

    /* Read remaining bytes */
    int tail = total - hdr_len;
    if (tail > 0) {
        uint32_t tail_timeout = (uint32_t)((tail * 11 * 1000) / (s->baud_rate ? s->baud_rate : 9600))
                                + s->timeout_tel_end + ADD_REC_TIMEOUT;
        if (tail_timeout < s->timeout_std) tail_timeout = s->timeout_std;
        n = timed_read(s->fd, resp + hdr_len, (size_t)tail, tail_timeout);
        if (n != tail) {
            if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] tail short: got %zd, want %d\n", n, tail);
            return EDXN_ERR_TRANSPORT;
        }
    }

    ds2_trace("rx", resp, (size_t)total);

    /* Verify checksum */
    if (!s->checksum_no_check && total >= 2) {
        uint8_t expected = xor_checksum(resp, (size_t)(total - 1));
        if (resp[total - 1] != expected) {
            if (getenv("EDXN_TRACE")) fprintf(stderr, "[ds2] checksum: got %02X, want %02X\n", resp[total - 1], expected);
            return EDXN_ERR_TRANSPORT;
        }
    }

    *resp_len = (size_t)total;
    s->last_activity = now_ms();
    return EDXN_OK;
}

/* ── vtable implementations ──────────────────────────────────────────── */

static edxn_error_t serial_connect(edxn_transport_t *t) {
    edxn_serial_t *s = (edxn_serial_t *)t;
    if (s->connected) return EDXN_OK;

    s->fd = open(s->port, O_RDWR | O_NOCTTY | O_NONBLOCK);
    if (s->fd < 0) return EDXN_ERR_TRANSPORT;

    /* Clear non-blocking after open */
    int flags = fcntl(s->fd, F_GETFL, 0);
    fcntl(s->fd, F_SETFL, flags & ~O_NONBLOCK);

    /* Open at 115200 8N1 for K+DCAN adapter probe */
    struct termios tio;
    if (tcgetattr(s->fd, &tio) < 0) {
        close(s->fd); s->fd = -1;
        return EDXN_ERR_TRANSPORT;
    }
    cfmakeraw(&tio);
    cfsetispeed(&tio, B115200);
    cfsetospeed(&tio, B115200);
    tio.c_cflag &= ~CSIZE;
    tio.c_cflag |= CS8 | CLOCAL | CREAD;
    tio.c_cflag &= ~(PARENB | CSTOPB | CRTSCTS);
    tio.c_cc[VMIN]  = 0;
    tio.c_cc[VTIME] = 0;
    if (tcsetattr(s->fd, TCSANOW, &tio) < 0) {
        close(s->fd); s->fd = -1;
        return EDXN_ERR_TRANSPORT;
    }
    tcflush(s->fd, TCIOFLUSH);

    probe_adapter(s);

    if (!s->is_kdcan) {
        /* Dumb FTDI — reconfigure to K-line baud/parity directly */
        if (apply_config(s) < 0) {
            close(s->fd); s->fd = -1;
            return EDXN_ERR_TRANSPORT;
        }
        tcflush(s->fd, TCIOFLUSH);
    }
    /* K+DCAN: UART stays at 115200 8N1; K-line params go in adapter telegrams */

    s->connected = true;
    s->last_activity = 0;
    return EDXN_OK;
}

static void serial_disconnect(edxn_transport_t *t) {
    edxn_serial_t *s = (edxn_serial_t *)t;
    if (s->fd >= 0) {
        tcdrain(s->fd);
        close(s->fd);
        s->fd = -1;
    }
    s->connected = false;
}

static edxn_error_t serial_send(edxn_transport_t *t,
                                 const uint8_t *req, size_t req_len,
                                 uint8_t *resp, size_t *resp_len, size_t resp_cap) {
    edxn_serial_t *s = (edxn_serial_t *)t;
    if (!s->connected) return EDXN_ERR_TRANSPORT;

    int attempts = 1 + s->comm_repeats;
    edxn_error_t err = EDXN_ERR_TRANSPORT;
    for (int i = 0; i < attempts; i++) {
        err = ds2_exchange(s, req, req_len, resp, resp_len, resp_cap);
        if (err == EDXN_OK) return EDXN_OK;
        if (i < attempts - 1) {
            tcflush(s->fd, TCIFLUSH);
            sleep_ms(50);
        }
    }
    return err;
}

static edxn_error_t serial_set_parameter(edxn_transport_t *t,
                                          uint16_t param, uint32_t value) {
    edxn_serial_t *s = (edxn_serial_t *)t;
    if (getenv("EDXN_TRACE"))
        fprintf(stderr, "[ds2] set_parameter(%u, %u)\n", param, value);
    switch (param) {
    case 0:
        s->concept = (uint16_t)value;
        break;
    case 1:
        s->baud_rate = value;
        if (s->connected) apply_config(s);
        break;
    case 5: s->timeout_std     = value; break;
    case 6: s->regen_time      = value; break;
    case 7: s->timeout_tel_end = value; break;
    case 8: s->interbyte_time  = value; break;
    case 9: s->checksum_by_user = (value != 0); break;
    case 0x8042: s->comm_repeats = (uint8_t)(value & 0xFF); break;
    default: break;
    }
    return EDXN_OK;
}

static bool serial_is_connected(edxn_transport_t *t) {
    return ((edxn_serial_t *)t)->connected;
}

static edxn_error_t serial_reset(edxn_transport_t *t) {
    serial_disconnect(t);
    return serial_connect(t);
}

static const char *serial_interface_type(edxn_transport_t *t) {
    (void)t;
    return "OBD";
}

static uint32_t serial_interface_version(edxn_transport_t *t) {
    (void)t;
    return 1;
}

static edxn_error_t serial_transmit_frequent(edxn_transport_t *t,
                                              const uint8_t *data, size_t len) {
    (void)t; (void)data; (void)len;
    return EDXN_OK;
}

static edxn_error_t serial_receive_frequent(edxn_transport_t *t,
                                             uint8_t *data, size_t *len, size_t cap) {
    (void)t; (void)data; (void)cap;
    *len = 0;
    return EDXN_OK;
}

static edxn_error_t serial_stop_frequent(edxn_transport_t *t) {
    (void)t;
    return EDXN_OK;
}

/* ── Public API ──────────────────────────────────────────────────────── */

edxn_serial_t *edxn_serial_create(const char *port) {
    edxn_serial_t *s = (edxn_serial_t *)calloc(1, sizeof(*s));
    if (!s) return NULL;

    strncpy(s->port, port, sizeof(s->port) - 1);
    s->fd = -1;

    s->concept        = 0x0001;
    s->baud_rate      = 9600;
    s->timeout_std    = 500;
    s->timeout_tel_end = 20;
    s->has_echo       = true;
    s->even_parity    = true;

    s->base.ctx               = s;
    s->base.connect           = serial_connect;
    s->base.disconnect        = serial_disconnect;
    s->base.send              = serial_send;
    s->base.set_parameter     = serial_set_parameter;
    s->base.is_connected      = serial_is_connected;
    s->base.reset             = serial_reset;
    s->base.transmit_frequent = serial_transmit_frequent;
    s->base.receive_frequent  = serial_receive_frequent;
    s->base.stop_frequent     = serial_stop_frequent;
    s->base.interface_type    = serial_interface_type;
    s->base.interface_version = serial_interface_version;

    return s;
}

void edxn_serial_destroy(edxn_serial_t *s) {
    if (!s) return;
    if (s->connected) serial_disconnect(&s->base);
    free(s);
}

edxn_transport_t *edxn_serial_transport(edxn_serial_t *s) {
    return &s->base;
}
