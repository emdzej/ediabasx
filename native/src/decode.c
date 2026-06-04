#include "ediabasx/decode.h"
#include "ediabasx/utils.h"
#include <string.h>

edxn_error_t edxn_decode_reg(uint8_t code, edxn_reg_ref_t *ref) {
    if (code <= 0x0F) {
        ref->type = EDXN_REG_B;
        ref->index = code;
    } else if (code <= 0x17) {
        ref->type = EDXN_REG_I;
        ref->index = code - 0x10;
    } else if (code <= 0x1B) {
        ref->type = EDXN_REG_L;
        ref->index = code - 0x18;
    } else if (code <= 0x23) {
        ref->type = EDXN_REG_S;
        ref->index = code - 0x1C;
    } else if (code <= 0x2B) {
        ref->type = EDXN_REG_F;
        ref->index = code - 0x24;
    } else if (code <= 0x33) {
        ref->type = EDXN_REG_S;
        ref->index = (code - 0x2C) + 8;
    } else if (code >= 0x80 && code <= 0x8F) {
        ref->type = EDXN_REG_A;
        ref->index = code - 0x80;
    } else if (code >= 0x90 && code <= 0x97) {
        ref->type = EDXN_REG_I;
        ref->index = (code - 0x90) + 8;
    } else if (code >= 0x98 && code <= 0x9B) {
        ref->type = EDXN_REG_L;
        ref->index = (code - 0x98) + 4;
    } else {
        return EDXN_ERR_OPERAND;
    }
    return EDXN_OK;
}


static edxn_error_t decode_s_reg_index(const uint8_t *code, size_t code_len,
                                        uint32_t offset, uint8_t *s_idx,
                                        uint32_t *next) {
    if (offset >= code_len) return EDXN_ERR_OPERAND;
    edxn_reg_ref_t ref;
    edxn_error_t err = edxn_decode_reg(code[offset], &ref);
    if (err != EDXN_OK) return err;
    if (ref.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
    *s_idx = ref.index;
    *next = offset + 1;
    return EDXN_OK;
}

edxn_error_t edxn_decode_operand(const uint8_t *code, size_t code_len,
                                  uint32_t offset, edxn_addr_mode_t mode,
                                  edxn_operand_t *out, uint32_t *next_offset) {
    memset(out, 0, sizeof(*out));

    switch (mode) {
    case EDXN_AM_NONE:
        out->kind = EDXN_OP_NONE;
        *next_offset = offset;
        return EDXN_OK;

    case EDXN_AM_REG_S:
    case EDXN_AM_REG_AB:
    case EDXN_AM_REG_I:
    case EDXN_AM_REG_L: {
        if (offset >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_REG;
        edxn_error_t err = edxn_decode_reg(code[offset], &out->u.reg);
        if (err != EDXN_OK) return err;
        *next_offset = offset + 1;
        return EDXN_OK;
    }

    case EDXN_AM_IMM8:
        if (offset >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_IMM;
        out->u.imm.value = (int8_t)code[offset];
        out->u.imm.width = 1;
        *next_offset = offset + 1;
        return EDXN_OK;

    case EDXN_AM_IMM16:
        if (offset + 2 > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_IMM;
        out->u.imm.value = edxn_read_i16_le(code + offset);
        out->u.imm.width = 2;
        *next_offset = offset + 2;
        return EDXN_OK;

    case EDXN_AM_IMM32:
        if (offset + 4 > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_IMM;
        out->u.imm.value = edxn_read_i32_le(code + offset);
        out->u.imm.width = 4;
        *next_offset = offset + 4;
        return EDXN_OK;

    case EDXN_AM_IMM_STR: {
        if (offset + 2 > code_len) return EDXN_ERR_OPERAND;
        uint16_t slen = edxn_read_u16_le(code + offset);
        if (offset + 2 + slen > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_STR;
        out->u.str.data = code + offset + 2;
        out->u.str.len  = slen;
        *next_offset = offset + 2 + slen;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_IMM: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur + 2 > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = false;
        out->u.idx.idx_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_REG: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.idx_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_REG_IMM: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.idx_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        if (cur + 2 > code_len) return EDXN_ERR_OPERAND;
        out->u.idx.has_off = true;
        out->u.idx.off_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_IMM_LEN_IMM: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur + 4 > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = false;
        out->u.idx.idx_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        out->u.idx.has_len = true;
        out->u.idx.len_is_reg = false;
        out->u.idx.len_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_IMM_LEN_REG: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur + 2 > code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = false;
        out->u.idx.idx_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->u.idx.has_len = true;
        out->u.idx.len_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.len_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_REG_LEN_IMM: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.idx_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        if (cur + 2 > code_len) return EDXN_ERR_OPERAND;
        out->u.idx.has_len = true;
        out->u.idx.len_is_reg = false;
        out->u.idx.len_imm = edxn_read_i16_le(code + cur);
        cur += 2;
        *next_offset = cur;
        return EDXN_OK;
    }

    case EDXN_AM_IDX_REG_LEN_REG: {
        uint32_t cur = offset;
        edxn_error_t err = decode_s_reg_index(code, code_len, cur, &out->u.idx.base_s, &cur);
        if (err != EDXN_OK) return err;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->kind = EDXN_OP_INDEXED;
        out->u.idx.idx_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.idx_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        if (cur >= code_len) return EDXN_ERR_OPERAND;
        out->u.idx.has_len = true;
        out->u.idx.len_is_reg = true;
        err = edxn_decode_reg(code[cur], &out->u.idx.len_reg);
        if (err != EDXN_OK) return err;
        cur += 1;
        *next_offset = cur;
        return EDXN_OK;
    }
    }

    return EDXN_ERR_OPERAND;
}

edxn_error_t edxn_decode_instruction(const uint8_t *code, size_t code_len,
                                      uint32_t pc, edxn_instruction_t *out) {
    if (pc + 2 > code_len)
        return EDXN_ERR_ILLEGAL_OPCODE;

    out->opcode = code[pc];
    uint8_t am_byte = code[pc + 1];
    edxn_addr_mode_t am0 = (edxn_addr_mode_t)((am_byte >> 4) & 0x0F);
    edxn_addr_mode_t am1 = (edxn_addr_mode_t)(am_byte & 0x0F);

    uint32_t cur = pc + 2;
    edxn_error_t err;

    err = edxn_decode_operand(code, code_len, cur, am0, &out->arg0, &cur);
    if (err != EDXN_OK) return err;

    err = edxn_decode_operand(code, code_len, cur, am1, &out->arg1, &cur);
    if (err != EDXN_OK) return err;

    out->next_pc = cur;
    return EDXN_OK;
}
