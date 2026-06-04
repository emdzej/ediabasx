#ifndef EDXN_DECODE_H
#define EDXN_DECODE_H

#include "types.h"

/* Addressing modes (upper/lower nibble of the address-mode byte) */
typedef enum {
    EDXN_AM_NONE            = 0,
    EDXN_AM_REG_S           = 1,
    EDXN_AM_REG_AB          = 2,
    EDXN_AM_REG_I           = 3,
    EDXN_AM_REG_L           = 4,
    EDXN_AM_IMM8            = 5,
    EDXN_AM_IMM16           = 6,
    EDXN_AM_IMM32           = 7,
    EDXN_AM_IMM_STR         = 8,
    EDXN_AM_IDX_IMM         = 9,
    EDXN_AM_IDX_REG         = 10,
    EDXN_AM_IDX_REG_IMM     = 11,
    EDXN_AM_IDX_IMM_LEN_IMM = 12,
    EDXN_AM_IDX_IMM_LEN_REG = 13,
    EDXN_AM_IDX_REG_LEN_IMM = 14,
    EDXN_AM_IDX_REG_LEN_REG = 15,
} edxn_addr_mode_t;

/* Register type tag */
typedef enum {
    EDXN_REG_B,
    EDXN_REG_A,
    EDXN_REG_I,
    EDXN_REG_L,
    EDXN_REG_S,
    EDXN_REG_F,
} edxn_reg_type_t;

typedef struct {
    edxn_reg_type_t type;
    uint8_t         index;
} edxn_reg_ref_t;

/* Operand kind */
typedef enum {
    EDXN_OP_NONE,
    EDXN_OP_REG,
    EDXN_OP_IMM,
    EDXN_OP_STR,
    EDXN_OP_INDEXED,
} edxn_operand_kind_t;

typedef struct {
    edxn_operand_kind_t kind;
    union {
        edxn_reg_ref_t reg;

        struct {
            int64_t value;
            uint8_t width;   /* 1, 2, or 4 */
        } imm;

        struct {
            const uint8_t *data;
            size_t         len;
        } str;

        /* Indexed sub-components are always registers or immediates (never nested). */
        struct {
            uint8_t        base_s;      /* S register index */
            bool           idx_is_reg;
            edxn_reg_ref_t idx_reg;
            int32_t        idx_imm;
            bool           has_len;
            bool           len_is_reg;
            edxn_reg_ref_t len_reg;
            int32_t        len_imm;
            bool           has_off;
            int32_t        off_imm;
        } idx;
    } u;
} edxn_operand_t;

typedef struct {
    uint8_t        opcode;
    edxn_operand_t arg0;
    edxn_operand_t arg1;
    uint32_t       next_pc;
} edxn_instruction_t;

edxn_error_t edxn_decode_reg(uint8_t code, edxn_reg_ref_t *ref);

edxn_error_t edxn_decode_operand(const uint8_t *code, size_t code_len,
                                  uint32_t offset, edxn_addr_mode_t mode,
                                  edxn_operand_t *out, uint32_t *next_offset);

edxn_error_t edxn_decode_instruction(const uint8_t *code, size_t code_len,
                                      uint32_t pc, edxn_instruction_t *out);

#endif
