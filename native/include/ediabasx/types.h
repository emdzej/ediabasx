#ifndef EDXN_TYPES_H
#define EDXN_TYPES_H

#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>

#define EDXN_S_REG_COUNT   16
#define EDXN_S_REG_MAXLEN  256
#define EDXN_F_REG_COUNT   8
#define EDXN_NUM_REG_BYTES 32

#define EDXN_STACK_MAX     256
#define EDXN_CALL_STACK_MAX 256

#define EDXN_MAX_RESULTS_PER_SET 256
#define EDXN_MAX_RESULT_SETS     256
#define EDXN_MAX_RESULT_NAME     64

#define EDXN_XOR_KEY 0xF7

typedef enum {
    EDXN_TYPE_INT,
    EDXN_TYPE_LONG,
    EDXN_TYPE_FLOAT,
    EDXN_TYPE_STRING,
    EDXN_TYPE_BINARY,
    EDXN_TYPE_CHAR,
    EDXN_TYPE_WORD,
    EDXN_TYPE_DWORD,
    EDXN_TYPE_BYTE,
} edxn_result_type_t;

typedef struct {
    char name[EDXN_MAX_RESULT_NAME];
    edxn_result_type_t type;
    union {
        int64_t  i;
        double   f;
        struct {
            uint8_t *data;
            size_t   len;
        } bin;
    } value;
} edxn_result_entry_t;

typedef struct {
    edxn_result_entry_t *entries;
    size_t count;
    size_t capacity;
} edxn_result_set_t;

typedef enum {
    EDXN_OK = 0,
    EDXN_ERR_NOMEM,
    EDXN_ERR_INVALID_PRG,
    EDXN_ERR_JOB_NOT_FOUND,
    EDXN_ERR_ILLEGAL_OPCODE,
    EDXN_ERR_STACK_OVERFLOW,
    EDXN_ERR_STACK_UNDERFLOW,
    EDXN_ERR_DIV_ZERO,
    EDXN_ERR_TRANSPORT,
    EDXN_ERR_TABLE,
    EDXN_ERR_FILE_IO,
    EDXN_ERR_OPERAND,
    EDXN_ERR_USER_BREAK,    /* 0x4B break, BIP_0008 */
    EDXN_ERR_TRAP,          /* 0x4D eerr — raised trap; bit_nr holds detail */
    EDXN_ERR_GENERR,        /* 0xAC generr — user-requested error */
    EDXN_ERR_BAD_FLOAT,     /* float Inf/NaN, BIP_0011 */
} edxn_error_t;

#endif
