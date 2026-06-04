/**
 * Control-flow opcodes (jmp / call / ret, conditional jumps gated by
 * flags, jt / jnt gated by trap state).
 *
 * Jump-offset encoding: an immediate operand carries the PC-relative
 * offset directly. A non-immediate (rare) carries an absolute target,
 * which `jump_offset()` converts to relative by subtracting current PC.
 *
 * Signed comparison jumps (0x5A–0x5D, jg/jnl/jl/jng) test S vs V — same
 * as x86 SF/OF after CMP. Unsigned (0x5E/0x5F, ja/jna) test C and Z.
 *
 * The trap-conditional jumps (jt/jnt, 0x47/0x48) delegate to
 * `edxn_trap_detected()` defined in opcodes_misc.c — that function holds
 * the full bit-match logic. Neither jt nor jnt auto-clear the trap bit;
 * the SGBD must call clrt (0x46) explicitly (mirrors TS).
 */

#include "vm_internal.h"

static int32_t jump_offset(const edxn_vm_t *vm, const edxn_operand_t *op) {
    if (op->kind == EDXN_OP_IMM)
        return (int32_t)op->u.imm.value;
    int32_t target = edxn_resolve_int(vm, op);
    return target - (int32_t)vm->pc;
}

edxn_error_t edxn_op_flow(edxn_vm_t *vm, uint8_t op,
                           const edxn_operand_t *a0, const edxn_operand_t *a1) {
    int32_t off;
    (void)a1;

    switch (op) {

    /* jmp (0x0B) */
    case 0x0B:
        off = jump_offset(vm, a0);
        vm->pc = (uint32_t)((int32_t)vm->pc + off);
        return EDXN_OK;

    /* call (0x0C) */
    case 0x0C: {
        off = jump_offset(vm, a0);
        edxn_error_t err = edxn_call_push(&vm->call_stack, vm->pc);
        if (err != EDXN_OK) return err;
        vm->pc = (uint32_t)((int32_t)vm->pc + off);
        return EDXN_OK;
    }

    /* ret (0x0D) */
    case 0x0D: {
        uint32_t addr;
        edxn_error_t err = edxn_call_pop(&vm->call_stack, &addr);
        if (err != EDXN_OK) return err;
        vm->pc = addr;
        return EDXN_OK;
    }

    /* jc (0x0E) */
    case 0x0E:
        if (vm->flags.c) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jnc (0x0F) */
    case 0x0F:
        if (!vm->flags.c) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jz (0x10) */
    case 0x10:
        if (vm->flags.z) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jnz (0x11) */
    case 0x11:
        if (!vm->flags.z) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jv (0x12) */
    case 0x12:
        if (vm->flags.v) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jnv (0x13) */
    case 0x13:
        if (!vm->flags.v) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jmi (0x14) */
    case 0x14:
        if (vm->flags.s) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jpl (0x15) */
    case 0x15:
        if (!vm->flags.s) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jt (0x47) — jump if trap matches.
       TS: noArgUsesAnyError=true → bitNr >= 0 means trap; with arg1 testBit:
       testBit > 0 → exact match (or bitNr=0 && testBit=32);
       testBit == 0 → bitNr >= 0x40000000. SGBD calls clrt explicitly. */
    case 0x47:
        if (edxn_trap_detected(vm, a1, /*no_arg_uses_any_error=*/true)) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jnt (0x48) — jump if NO trap.
       TS: noArgUsesAnyError=false → only fires when bitNr < 0x40000000. */
    case 0x48:
        if (!edxn_trap_detected(vm, a1, /*no_arg_uses_any_error=*/false)) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jg (0x5A) — jump if greater (signed): !Z && !S (or: Z=0 && S=V) */
    case 0x5A:
        if (!vm->flags.z && (vm->flags.s == vm->flags.v)) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jnl (0x5B) — jump if not less (signed): S == V */
    case 0x5B:
        if (vm->flags.s == vm->flags.v) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jl (0x5C) — jump if less (signed): S != V */
    case 0x5C:
        if (vm->flags.s != vm->flags.v) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jng (0x5D) — jump if not greater (signed): Z || (S != V) */
    case 0x5D:
        if (vm->flags.z || (vm->flags.s != vm->flags.v)) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* ja (0x5E) — jump if above (unsigned): !C && !Z */
    case 0x5E:
        if (!vm->flags.c && !vm->flags.z) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    /* jna (0x5F) — jump if not above (unsigned): C || Z */
    case 0x5F:
        if (vm->flags.c || vm->flags.z) {
            off = jump_offset(vm, a0);
            vm->pc = (uint32_t)((int32_t)vm->pc + off);
        }
        return EDXN_OK;

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
