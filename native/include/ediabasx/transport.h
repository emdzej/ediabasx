#ifndef EDXN_TRANSPORT_H
#define EDXN_TRANSPORT_H

#include "types.h"

/*
 * Transport HAL — platform-specific implementations provide these callbacks.
 * The VM calls through this vtable for all ECU communication.
 *
 * Required callbacks (the VM assumes these are present on any non-NULL
 * transport): connect, disconnect, send, is_connected.
 *
 * Optional callbacks (NULL = "function not supported by interface"):
 * everything below `interface_version`. The matching opcode either
 * degrades to a no-op or returns through `comm_error` (which respects the
 * SGBD's trap mask, mirroring TS `assertCapability`).
 *
 * For an example impl, see `platform/posix/serial.c`.
 */

typedef struct edxn_transport edxn_transport_t;

struct edxn_transport {
    void *ctx;

    edxn_error_t (*connect)(edxn_transport_t *t);
    void         (*disconnect)(edxn_transport_t *t);

    /* Send request, receive response. resp_cap = buffer capacity on entry. */
    edxn_error_t (*send)(edxn_transport_t *t,
                         const uint8_t *req, size_t req_len,
                         uint8_t *resp, size_t *resp_len, size_t resp_cap);

    edxn_error_t (*transmit_frequent)(edxn_transport_t *t,
                                       const uint8_t *data, size_t len);
    edxn_error_t (*receive_frequent)(edxn_transport_t *t,
                                      uint8_t *data, size_t *len, size_t cap);
    edxn_error_t (*stop_frequent)(edxn_transport_t *t);

    bool         (*is_connected)(edxn_transport_t *t);

    edxn_error_t (*set_parameter)(edxn_transport_t *t, uint16_t param, uint32_t value);
    edxn_error_t (*get_parameter)(edxn_transport_t *t, uint16_t param, uint32_t *value);

    edxn_error_t (*reset)(edxn_transport_t *t);
    edxn_error_t (*boot)(edxn_transport_t *t);

    /* Key bytes from the ECU init sequence (ISO 9141). */
    const uint8_t *(*key_bytes)(edxn_transport_t *t, size_t *len);

    /* Ignition / battery voltage (millivolts). 0 = not supported. */
    uint32_t (*ignition_mv)(edxn_transport_t *t);
    uint32_t (*battery_mv)(edxn_transport_t *t);

    /* Interface type string (e.g. "OBD", "ADS", "ENET"). */
    const char *(*interface_type)(edxn_transport_t *t);
    uint32_t    (*interface_version)(edxn_transport_t *t);

    /* ── Optional capabilities (NULL → "function not supported") ────── */

    /* xawlen 0x29 — set expected answer lengths (uint16 LE pairs). */
    edxn_error_t (*set_answer_lengths)(edxn_transport_t *t,
                                        const uint16_t *lengths, size_t count);

    /* xstate 0x2F — multi-byte interface state (mirrors TS getState()).
       Returns pointer to state bytes; *len updated. NULL → not supported. */
    const uint8_t *(*state)(edxn_transport_t *t, size_t *out_len);

    /* xgetport 0x71 — distinct from get_parameter (port namespace). */
    edxn_error_t (*get_port)(edxn_transport_t *t, uint8_t port_idx, uint32_t *value);

    /* xloopt 0x73 — loop / line test (e.g. K-line resistance). */
    edxn_error_t (*loop_test)(edxn_transport_t *t, uint32_t *value);

    /* xprog 0x74 — set programming voltage (mV; 0 = off). */
    edxn_error_t (*set_program_voltage)(edxn_transport_t *t, uint32_t mv);

    /* xraw 0x75 — bypass framing (raw bytes on wire). */
    edxn_error_t (*raw_data)(edxn_transport_t *t,
                              const uint8_t *req, size_t req_len,
                              uint8_t *resp, size_t *resp_len, size_t resp_cap);

    /* xsetport 0x76 — port write. */
    edxn_error_t (*set_port)(edxn_transport_t *t, uint8_t port_idx, uint32_t value);

    /* xsireset 0x77 — toggle service-interval relay for `time_ms` ms. */
    edxn_error_t (*switch_si_relais)(edxn_transport_t *t, uint32_t time_ms);
};

#endif
