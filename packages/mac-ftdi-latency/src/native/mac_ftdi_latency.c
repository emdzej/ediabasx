// Sets the FTDI USB-side latency timer on macOS via the
// IOSerialFamily `IOSSDATALAT` ioctl. Default is ~16 ms; values in
// microseconds. We open the device file non-exclusively (`O_NONBLOCK |
// O_NOCTTY` on `/dev/cu.*`) so we don't fight node-serialport for the
// port — macOS `cu.*` callout devices explicitly allow concurrent
// opens. The ioctl can be issued on a momentarily-held fd; the
// FTDI driver applies it to the underlying device, not the fd, so it
// persists after we close.
//
// We're a one-shot tweak; node-serialport keeps the long-lived fd.
//
// References:
//   * <IOKit/serial/ioss.h>
//   * https://developer.apple.com/library/archive/samplecode/SerialPortSample/

#include <node_api.h>
#include <stdint.h>
#include <string.h>

#ifdef __APPLE__
#include <sys/ioctl.h>
#include <fcntl.h>
#include <unistd.h>
#include <errno.h>
#include <IOKit/serial/ioss.h>
#endif

#define THROW_TYPE(env, msg)                                            \
    do { napi_throw_type_error((env), NULL, (msg)); return NULL; } while (0)

static napi_value
make_result(napi_env env, bool ok, const char *err_msg)
{
    napi_value obj, jsok;
    napi_create_object(env, &obj);
    napi_get_boolean(env, ok, &jsok);
    napi_set_named_property(env, obj, "ok", jsok);
    if (!ok && err_msg) {
        napi_value jserr;
        napi_create_string_utf8(env, err_msg, NAPI_AUTO_LENGTH, &jserr);
        napi_set_named_property(env, obj, "error", jserr);
    }
    return obj;
}

static napi_value
SetLatencyMicros(napi_env env, napi_callback_info info)
{
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);
    if (argc < 2)
        THROW_TYPE(env, "Expected (devicePath: string, latencyUs: number)");

    char path[512];
    size_t path_len = 0;
    if (napi_get_value_string_utf8(env, args[0], path, sizeof(path), &path_len) != napi_ok)
        THROW_TYPE(env, "devicePath must be a string");

    uint32_t latency_us = 0;
    if (napi_get_value_uint32(env, args[1], &latency_us) != napi_ok)
        THROW_TYPE(env, "latencyUs must be a non-negative integer");

#ifdef __APPLE__
    int fd = open(path, O_RDWR | O_NOCTTY | O_NONBLOCK);
    if (fd < 0)
        return make_result(env, false, strerror(errno));

    unsigned long val = latency_us;
    int ret = ioctl(fd, IOSSDATALAT, &val);
    int saved_errno = errno;
    close(fd);

    if (ret != 0)
        return make_result(env, false, strerror(saved_errno));
    return make_result(env, true, NULL);
#else
    (void)path;
    (void)latency_us;
    return make_result(env, false, "Not implemented on this platform");
#endif
}

NAPI_MODULE_INIT(/* env, exports */)
{
    napi_value fn;
    napi_create_function(env, "setLatencyMicros", NAPI_AUTO_LENGTH,
                         SetLatencyMicros, NULL, &fn);
    napi_set_named_property(env, exports, "setLatencyMicros", fn);
    return exports;
}
