/**
 * Communication opcodes (xconnect / xsend / xsetpar / xtype / xvers / …).
 *
 * Most opcodes delegate straight to the transport vtable. The "optional
 * capability" pattern: if a callback is NULL and the missing capability
 * isn't critical (e.g. xprog, xsireset, xsetport), the opcode degrades
 * to a silent no-op rather than failing — this preserves compatibility
 * with backends that only implement the K-line subset. Required
 * callbacks (connect/send/disconnect) error through `comm_error` when
 * absent.
 *
 * Trap routing via `comm_error`: when a transport call fails and the
 * SGBD has set `error_trap_mask`, the failure is converted into a soft
 * trap (`error_trap_bit_nr = 0x40000000`, return OK) so the SGBD's own
 * `jt`/`jnt` handler can react. Without the trap mask set, the failure
 * propagates as `EDXN_ERR_TRANSPORT` and aborts the job.
 */

#include "vm_internal.h"

static edxn_error_t comm_error(edxn_vm_t *vm) {
    /* Mirrors TS: when a comm error fires and the trap mask is set,
       mark errorTrapBitNr = 0x40000000 (general error) so jt/jnt fire. */
    if (vm->error_trap_mask) {
        vm->error_trap_bit_nr = 0x40000000;
        return EDXN_OK;
    }
    return EDXN_ERR_TRANSPORT;
}

edxn_error_t edxn_op_comm(edxn_vm_t *vm, uint8_t op,
                           const edxn_operand_t *a0, const edxn_operand_t *a1) {
    switch (op) {

    /* xconnect (0x26) */
    case 0x26: {
        if (!vm->transport || !vm->transport->connect) return comm_error(vm);
        edxn_error_t err = vm->transport->connect(vm->transport);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xhangup (0x27) */
    case 0x27: {
        if (!vm->transport || !vm->transport->disconnect) return comm_error(vm);
        vm->transport->disconnect(vm->transport);
        return EDXN_OK;
    }

    /* xsetpar (0x28) — decode parameter array and set each.
       TS xsetparBytes: byte[1] selects stride (0x00=2, 0x01=4, 0xFF=1),
       then the ENTIRE blob is decoded as flat LE values at that stride.
       byte[0..1] form the first value (concept); byte[1] serves as both
       stride marker and high byte of concept (always 0x00 for 2-byte). */
    case 0x28: {
        if (!vm->transport || !vm->transport->set_parameter) return comm_error(vm);
        size_t plen;
        const uint8_t *params = edxn_resolve_binary(vm, a0, &plen);
        if (!params || plen < 2) return EDXN_OK;
        int stride;
        switch (params[1]) {
        case 0x00: stride = 2; break;
        case 0x01: stride = 4; break;
        case 0xFF: stride = 1; break;
        default:   stride = 2; break;
        }
        if (plen % (size_t)stride != 0) return EDXN_OK;
        size_t count = plen / (size_t)stride;
        for (size_t i = 0; i < count; i++) {
            size_t off = i * (size_t)stride;
            uint32_t val = 0;
            for (int b = 0; b < stride; b++)
                val |= (uint32_t)params[off + b] << (b * 8);
            edxn_error_t err = vm->transport->set_parameter(
                vm->transport, (uint16_t)i, val);
            if (err != EDXN_OK) return comm_error(vm);
        }
        return EDXN_OK;
    }

    /* xawlen (0x29) — set answer lengths. Optional capability: silently
       no-op when transport doesn't expose it (matches pre-audit behavior). */
    case 0x29: {
        if (!vm->transport || !vm->transport->set_answer_lengths) return EDXN_OK;
        size_t plen;
        const uint8_t *params = edxn_resolve_binary(vm, a0, &plen);
        if (!params || plen < 2 || plen % 2 != 0) return EDXN_OK;
        size_t n = plen / 2;
        uint16_t lengths[64];
        if (n > 64) n = 64;
        for (size_t i = 0; i < n; i++)
            lengths[i] = (uint16_t)params[i * 2] | ((uint16_t)params[i * 2 + 1] << 8);
        edxn_error_t err = vm->transport->set_answer_lengths(vm->transport, lengths, n);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xsend (0x2A) — send request, receive response */
    case 0x2A: {
        if (!vm->transport || !vm->transport->send) return comm_error(vm);
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        size_t req_len;
        const uint8_t *req = edxn_resolve_binary(vm, a1, &req_len);
        uint8_t resp[EDXN_S_REG_MAXLEN];
        size_t resp_len = 0;
        edxn_error_t err = vm->transport->send(vm->transport,
            req, req_len, resp, &resp_len, EDXN_S_REG_MAXLEN);
        if (err != EDXN_OK) return comm_error(vm);
        edxn_reg_set_s(&vm->regs, a0->u.reg.index, resp, resp_len);
        return EDXN_OK;
    }

    /* xsendf (0x2B) — transmit frequent buffer */
    case 0x2B: {
        if (!vm->transport || !vm->transport->transmit_frequent)
            return comm_error(vm);
        size_t plen;
        const uint8_t *data = edxn_resolve_binary(vm, a0, &plen);
        edxn_error_t err = vm->transport->transmit_frequent(
            vm->transport, data, plen);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xrequf (0x2C) — receive frequent buffer */
    case 0x2C: {
        if (!vm->transport || !vm->transport->receive_frequent)
            return comm_error(vm);
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        uint8_t buf[EDXN_S_REG_MAXLEN];
        size_t len = 0;
        edxn_error_t err = vm->transport->receive_frequent(
            vm->transport, buf, &len, EDXN_S_REG_MAXLEN);
        if (err != EDXN_OK) return comm_error(vm);
        edxn_reg_set_s(&vm->regs, a0->u.reg.index, buf, len);
        return EDXN_OK;
    }

    /* xstopf (0x2D) — stop frequent mode */
    case 0x2D: {
        if (!vm->transport || !vm->transport->stop_frequent)
            return comm_error(vm);
        edxn_error_t err = vm->transport->stop_frequent(vm->transport);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xkeyb (0x2E) — get key bytes */
    case 0x2E: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (!vm->transport || !vm->transport->key_bytes) return comm_error(vm);
        size_t klen;
        const uint8_t *kb = vm->transport->key_bytes(vm->transport, &klen);
        if (kb)
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, kb, klen);
        return EDXN_OK;
    }

    /* xstate (0x2F) — get interface state.
       TS: returns multi-byte state from getState(). Falls back to
       1-byte is_connected if state() callback is absent. */
    case 0x2F: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (!vm->transport) return comm_error(vm);
        if (vm->transport->state) {
            size_t slen = 0;
            const uint8_t *sbuf = vm->transport->state(vm->transport, &slen);
            if (sbuf && slen > 0) {
                edxn_reg_set_s(&vm->regs, a0->u.reg.index, sbuf, slen);
                return EDXN_OK;
            }
        }
        if (vm->transport->is_connected) {
            uint8_t connected = vm->transport->is_connected(vm->transport) ? 1 : 0;
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, &connected, 1);
            return EDXN_OK;
        }
        return comm_error(vm);
    }

    /* xboot (0x30) */
    case 0x30: {
        if (!vm->transport || !vm->transport->boot) return comm_error(vm);
        edxn_error_t err = vm->transport->boot(vm->transport);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xreset (0x31) */
    case 0x31: {
        if (!vm->transport) return comm_error(vm);
        if (vm->transport->reset) {
            edxn_error_t err = vm->transport->reset(vm->transport);
            if (err != EDXN_OK) return comm_error(vm);
        } else if (vm->transport->disconnect && vm->transport->connect) {
            vm->transport->disconnect(vm->transport);
            edxn_error_t err = vm->transport->connect(vm->transport);
            if (err != EDXN_OK) return comm_error(vm);
        } else {
            return comm_error(vm);
        }
        return EDXN_OK;
    }

    /* xtype (0x32) — get interface type string.
       TS: assertConnected first; empty string when null. */
    case 0x32: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (!vm->transport) return comm_error(vm);
        if (vm->transport->is_connected && !vm->transport->is_connected(vm->transport))
            return comm_error(vm);
        const char *itype = vm->transport->interface_type
            ? vm->transport->interface_type(vm->transport) : NULL;
        if (itype)
            edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                            (const uint8_t *)itype, strlen(itype));
        else
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
        return EDXN_OK;
    }

    /* xvers (0x33) — get interface version. TS: assertConnected first. */
    case 0x33: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        if (!vm->transport) return comm_error(vm);
        if (vm->transport->is_connected && !vm->transport->is_connected(vm->transport))
            return comm_error(vm);
        uint32_t ver = vm->transport->interface_version
            ? vm->transport->interface_version(vm->transport) : 0;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)ver);
        return EDXN_OK;
    }

    /* xreps (0x42) — set repeat counter */
    case 0x42: {
        if (!vm->transport || !vm->transport->set_parameter) return comm_error(vm);
        int32_t count = edxn_resolve_int(vm, a0) & 0xFF;
        edxn_error_t err = vm->transport->set_parameter(
            vm->transport, 0x8042, (uint32_t)count);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xbatt (0x6E) — get battery voltage */
    case 0x6E: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        if (!vm->transport || !vm->transport->battery_mv) return comm_error(vm);
        uint32_t mv = vm->transport->battery_mv(vm->transport);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)mv);
        return EDXN_OK;
    }

    /* xgetport (0x71) — TS uses distinct getPort(idx). Fall back to
       get_parameter for backends that don't implement a separate port API. */
    case 0x71: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        if (!vm->transport) return comm_error(vm);
        uint32_t val = 0;
        int32_t port_idx = edxn_resolve_int(vm, a1) & 0xFF;
        edxn_error_t err;
        if (vm->transport->get_port) {
            err = vm->transport->get_port(vm->transport, (uint8_t)port_idx, &val);
        } else if (vm->transport->get_parameter) {
            err = vm->transport->get_parameter(vm->transport, (uint16_t)port_idx, &val);
        } else {
            return comm_error(vm);
        }
        if (err != EDXN_OK) return comm_error(vm);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)val);
        return EDXN_OK;
    }

    /* xignit (0x72) — get ignition voltage */
    case 0x72: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        if (!vm->transport || !vm->transport->ignition_mv) return comm_error(vm);
        uint32_t mv = vm->transport->ignition_mv(vm->transport);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)mv);
        return EDXN_OK;
    }

    /* xloopt (0x73) — loop test. Returns 0 when capability absent. */
    case 0x73: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        uint32_t val = 0;
        if (vm->transport && vm->transport->loop_test) {
            edxn_error_t err = vm->transport->loop_test(vm->transport, &val);
            if (err != EDXN_OK) return comm_error(vm);
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)val);
        return EDXN_OK;
    }

    /* xprog (0x74) — set programming voltage (mV). No-op when absent. */
    case 0x74: {
        if (!vm->transport || !vm->transport->set_program_voltage) return EDXN_OK;
        uint32_t mv = (uint32_t)edxn_resolve_int(vm, a0);
        edxn_error_t err = vm->transport->set_program_voltage(vm->transport, mv);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xraw (0x75) — bypass-framing raw bytes. Falls back to send() if the
       transport doesn't expose a separate raw_data path. */
    case 0x75: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (a1->kind != EDXN_OP_REG || a1->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (!vm->transport) return comm_error(vm);
        size_t req_len;
        const uint8_t *req = edxn_reg_get_s(&vm->regs, a1->u.reg.index, &req_len);
        uint8_t resp[EDXN_S_REG_MAXLEN];
        size_t resp_len = 0;
        edxn_error_t err;
        if (vm->transport->raw_data) {
            err = vm->transport->raw_data(vm->transport,
                req, req_len, resp, &resp_len, EDXN_S_REG_MAXLEN);
        } else if (vm->transport->send) {
            err = vm->transport->send(vm->transport,
                req, req_len, resp, &resp_len, EDXN_S_REG_MAXLEN);
        } else {
            return comm_error(vm);
        }
        if (err != EDXN_OK) return comm_error(vm);
        edxn_reg_set_s(&vm->regs, a0->u.reg.index, resp, resp_len);
        return EDXN_OK;
    }

    /* xsetport (0x76) — port write. No-op when absent. */
    case 0x76: {
        if (!vm->transport || !vm->transport->set_port) return EDXN_OK;
        int32_t port_idx = edxn_resolve_int(vm, a0) & 0xFF;
        uint32_t val = (uint32_t)edxn_resolve_int(vm, a1);
        edxn_error_t err = vm->transport->set_port(vm->transport,
            (uint8_t)port_idx, val);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    /* xsireset (0x77) — service-interval relay toggle. No-op when absent. */
    case 0x77: {
        if (!vm->transport || !vm->transport->switch_si_relais) return EDXN_OK;
        uint32_t time_ms = (uint32_t)edxn_resolve_int(vm, a0);
        edxn_error_t err = vm->transport->switch_si_relais(vm->transport, time_ms);
        if (err != EDXN_OK) return comm_error(vm);
        return EDXN_OK;
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
