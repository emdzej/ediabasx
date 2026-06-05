#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "ediabasx/registers.h"
#include "ediabasx/flags.h"
#include "ediabasx/stack.h"
#include "ediabasx/decode.h"
#include "ediabasx/result.h"
#include "ediabasx/vm.h"

static void test_registers(void) {
    edxn_registers_t regs;
    edxn_reg_reset(&regs);

    /* B/A byte registers */
    edxn_reg_set_b(&regs, 0, 0x42);
    assert(edxn_reg_get_b(&regs, 0) == 0x42);

    edxn_reg_set_a(&regs, 3, 0xAA);
    assert(edxn_reg_get_a(&regs, 3) == 0xAA);

    /* I register overlaps B */
    edxn_reg_set_b(&regs, 0, 0x34);
    edxn_reg_set_b(&regs, 1, 0x12);
    assert(edxn_reg_get_i(&regs, 0) == 0x1234);

    /* L register overlaps B/I */
    edxn_reg_set_l(&regs, 0, 0xDEADBEEF);
    assert(edxn_reg_get_b(&regs, 0) == 0xEF);
    assert(edxn_reg_get_b(&regs, 1) == 0xBE);
    assert(edxn_reg_get_i(&regs, 0) == 0xBEEF);

    /* S registers */
    const uint8_t data[] = {0x48, 0x65, 0x6C, 0x6C, 0x6F};
    edxn_reg_set_s(&regs, 0, data, 5);
    size_t slen;
    const uint8_t *s = edxn_reg_get_s(&regs, 0, &slen);
    assert(slen == 5);
    assert(memcmp(s, data, 5) == 0);

    /* F registers */
    edxn_reg_set_f(&regs, 0, 3.14159);
    assert(edxn_reg_get_f(&regs, 0) == 3.14159);

    printf("  PASS: test_registers\n");
}

static void test_flags(void) {
    edxn_flags_t f;
    edxn_flags_reset(&f);
    assert(!f.z && !f.c && !f.v && !f.s);

    edxn_flags_update_zs(&f, 0, 1);
    assert(f.z == true);

    edxn_flags_update_zs(&f, 0x80, 1);
    assert(f.s == true && f.z == false);

    edxn_flags_update_sub(&f, 5, 10, 1);
    assert(f.c == true);

    printf("  PASS: test_flags\n");
}

static void test_stack(void) {
    edxn_data_stack_t ds;
    edxn_stack_reset(&ds);
    assert(ds.depth == 0);

    assert(edxn_stack_push(&ds, 0x11) == EDXN_OK);
    assert(edxn_stack_push(&ds, 0x22) == EDXN_OK);
    assert(ds.depth == 2);

    uint8_t val;
    assert(edxn_stack_peek(&ds, 0, &val) == EDXN_OK);
    assert(val == 0x22);

    assert(edxn_stack_pop(&ds, &val) == EDXN_OK);
    assert(val == 0x22);

    assert(edxn_stack_pop(&ds, &val) == EDXN_OK);
    assert(val == 0x11);

    assert(edxn_stack_pop(&ds, &val) == EDXN_ERR_STACK_UNDERFLOW);

    edxn_call_stack_t cs;
    edxn_call_reset(&cs);
    assert(edxn_call_push(&cs, 0x1234) == EDXN_OK);
    uint32_t addr;
    assert(edxn_call_pop(&cs, &addr) == EDXN_OK);
    assert(addr == 0x1234);

    printf("  PASS: test_stack\n");
}

static void test_decode_register(void) {
    edxn_reg_ref_t ref;

    assert(edxn_decode_reg(0x00, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_B && ref.index == 0);

    assert(edxn_decode_reg(0x0F, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_B && ref.index == 15);

    assert(edxn_decode_reg(0x10, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_I && ref.index == 0);

    assert(edxn_decode_reg(0x18, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_L && ref.index == 0);

    assert(edxn_decode_reg(0x1C, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_S && ref.index == 0);

    assert(edxn_decode_reg(0x24, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_F && ref.index == 0);

    assert(edxn_decode_reg(0x2C, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_S && ref.index == 8);

    assert(edxn_decode_reg(0x80, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_A && ref.index == 0);

    assert(edxn_decode_reg(0x90, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_I && ref.index == 8);

    assert(edxn_decode_reg(0x98, &ref) == EDXN_OK);
    assert(ref.type == EDXN_REG_L && ref.index == 4);

    assert(edxn_decode_reg(0x50, &ref) == EDXN_ERR_OPERAND);

    printf("  PASS: test_decode_register\n");
}

static void test_decode_instruction(void) {
    /* move B0, #$42 → opcode=0x00, am=0x25 (REG_AB=2, IMM8=5), B0=0x00, val=0x42 */
    uint8_t code[] = { 0x00, 0x25, 0x00, 0x42 };
    edxn_instruction_t inst;
    assert(edxn_decode_instruction(code, sizeof(code), 0, &inst) == EDXN_OK);
    assert(inst.opcode == 0x00);
    assert(inst.arg0.kind == EDXN_OP_REG);
    assert(inst.arg0.u.reg.type == EDXN_REG_B);
    assert(inst.arg0.u.reg.index == 0);
    assert(inst.arg1.kind == EDXN_OP_IMM);
    assert(inst.arg1.u.imm.value == 0x42);
    assert(inst.next_pc == 4);

    printf("  PASS: test_decode_instruction\n");
}

static void test_results(void) {
    edxn_result_set_t set;
    assert(edxn_result_init(&set, 4) == EDXN_OK);

    assert(edxn_result_add_int(&set, "VIN", EDXN_TYPE_INT, 12345) == EDXN_OK);
    assert(edxn_result_add_float(&set, "VOLTAGE", 13.8) == EDXN_OK);

    const uint8_t bin[] = {0xDE, 0xAD};
    assert(edxn_result_add_binary(&set, "raw", EDXN_TYPE_BINARY, bin, 2) == EDXN_OK);

    const edxn_result_entry_t *e = edxn_result_find(&set, "vin");
    assert(e != NULL);
    assert(e->value.i == 12345);

    e = edxn_result_find(&set, "VOLTAGE");
    assert(e != NULL);
    assert(e->value.f == 13.8);

    e = edxn_result_find(&set, "RAW");
    assert(e != NULL);
    assert(e->value.bin.len == 2);

    assert(edxn_result_find(&set, "NOPE") == NULL);

    edxn_result_free(&set);
    printf("  PASS: test_results\n");
}

static void test_binary_params(void) {
    /* `edxn_vm_set_binary_params` is the host-side feed for the
       apiJobData channel. Reading happens via `pary` (opcode 0x7F)
       and the slot-indexed `parb`/`parw`/`parl`/`parr` opcodes,
       all backed by the same `vm->param_binary[]` + `param_binary_len`
       pair. These tests pin the setter contract; the opcode read
       path is covered by `edxn_run` integrations against real
       SGBDs with `pary`-using jobs. */
    edxn_vm_t vm;
    memset(&vm, 0, sizeof(vm));

    /* Initial state: empty buffer, zero len. */
    assert(vm.param_binary_len == 0);

    /* Happy path: bytes land verbatim, len matches. */
    const uint8_t bytes[] = {0xAB, 0xCD, 0xEF, 0x12};
    assert(edxn_vm_set_binary_params(&vm, bytes, sizeof(bytes)) == EDXN_OK);
    assert(vm.param_binary_len == sizeof(bytes));
    assert(memcmp(vm.param_binary, bytes, sizeof(bytes)) == 0);

    /* NULL or zero len clears — used by the run_job path between
       a binary-payload job and the next bootstrap job. */
    assert(edxn_vm_set_binary_params(&vm, NULL, 0) == EDXN_OK);
    assert(vm.param_binary_len == 0);
    assert(edxn_vm_set_binary_params(&vm, bytes, 0) == EDXN_OK);
    assert(vm.param_binary_len == 0);

    /* Truncation at EDXN_PARAM_BINARY_MAX. Mirrors the TS path
       where ediabasx trusts the SGBD's own input-length check
       rather than rejecting on the host. */
    uint8_t big[EDXN_PARAM_BINARY_MAX + 64];
    memset(big, 0x77, sizeof(big));
    assert(edxn_vm_set_binary_params(&vm, big, sizeof(big)) == EDXN_OK);
    assert(vm.param_binary_len == EDXN_PARAM_BINARY_MAX);
    /* And the truncated bytes match the input prefix. */
    for (size_t i = 0; i < EDXN_PARAM_BINARY_MAX; i++) {
        assert(vm.param_binary[i] == 0x77);
    }

    /* Defensive: NULL vm is rejected, no crash. */
    assert(edxn_vm_set_binary_params(NULL, bytes, sizeof(bytes)) != EDXN_OK);

    printf("  PASS: test_binary_params\n");
}

int main(void) {
    printf("VM core tests:\n");
    test_registers();
    test_flags();
    test_stack();
    test_decode_register();
    test_decode_instruction();
    test_binary_params();
    test_results();
    printf("All VM tests passed.\n");
    return 0;
}
