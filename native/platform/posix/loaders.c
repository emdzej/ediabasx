/* POSIX file-backed loaders for SGBD variant resolution (GRP→PRG) and
   external table files (tabsetex). Both use a `const char *` ECU directory
   passed as the loader context. Resolution is case-insensitive (since BMW
   tools mix uppercase MS420DS0.PRG with lowercase fs case on real disks). */

#include "ediabasx/vm.h"
#include "ediabasx/prg.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <strings.h>
#include <dirent.h>

static uint8_t *read_whole_file(const char *path, size_t *out_len) {
    FILE *f = fopen(path, "rb");
    if (!f) return NULL;
    fseek(f, 0, SEEK_END);
    long n = ftell(f);
    fseek(f, 0, SEEK_SET);
    if (n < 0) { fclose(f); return NULL; }
    uint8_t *buf = (uint8_t *)malloc((size_t)n);
    if (!buf) { fclose(f); return NULL; }
    size_t got = fread(buf, 1, (size_t)n, f);
    fclose(f);
    if (got != (size_t)n) { free(buf); return NULL; }
    *out_len = (size_t)n;
    return buf;
}

/* Case-insensitive scan of `dir` for an entry matching `wanted` (filename only).
   On match, copies the actual filename into `out_name` (size cap) and returns
   true. Returns false if no match. */
static bool resolve_ci(const char *dir, const char *wanted,
                       char *out_name, size_t cap) {
    DIR *d = opendir(dir);
    if (!d) return false;
    struct dirent *e;
    bool found = false;
    while ((e = readdir(d)) != NULL) {
        if (strcasecmp(e->d_name, wanted) == 0) {
            strncpy(out_name, e->d_name, cap - 1);
            out_name[cap - 1] = '\0';
            found = true;
            break;
        }
    }
    closedir(d);
    return found;
}

static edxn_error_t load_prg_from_dir(const char *dir, const char *filename,
                                       edxn_prg_t **out_prg, uint8_t **out_bytes) {
    char actual_name[256];
    if (!resolve_ci(dir, filename, actual_name, sizeof(actual_name))) {
        return EDXN_ERR_FILE_IO;
    }
    char full[1024];
    snprintf(full, sizeof(full), "%s/%s", dir, actual_name);
    size_t len = 0;
    uint8_t *data = read_whole_file(full, &len);
    if (!data) return EDXN_ERR_FILE_IO;

    edxn_prg_t *prg = (edxn_prg_t *)calloc(1, sizeof(edxn_prg_t));
    if (!prg) { free(data); return EDXN_ERR_NOMEM; }

    edxn_error_t err = edxn_prg_parse(prg, data, len);
    if (err != EDXN_OK) {
        free(prg);
        free(data);
        return err;
    }
    *out_prg = prg;
    *out_bytes = data;
    return EDXN_OK;
}

edxn_error_t edxn_vm_posix_sgbd_loader(void *ctx, const char *variant_name,
                                        edxn_prg_t **out_prg, uint8_t **out_bytes) {
    const char *ecu_dir = (const char *)ctx;
    if (!ecu_dir || !variant_name) return EDXN_ERR_FILE_IO;
    char filename[256];
    snprintf(filename, sizeof(filename), "%s.prg", variant_name);
    return load_prg_from_dir(ecu_dir, filename, out_prg, out_bytes);
}

edxn_error_t edxn_vm_posix_table_loader(void *ctx, const char *file_name,
                                         edxn_prg_t **out_prg, uint8_t **out_bytes) {
    const char *ecu_dir = (const char *)ctx;
    if (!ecu_dir || !file_name) return EDXN_ERR_FILE_IO;
    /* Try the filename verbatim first, then with .prg extension if missing. */
    char path_buf[256];
    snprintf(path_buf, sizeof(path_buf), "%s", file_name);
    if (strchr(path_buf, '.') == NULL) {
        size_t l = strlen(path_buf);
        if (l + 4 < sizeof(path_buf)) {
            strcat(path_buf, ".prg");
        }
    }
    return load_prg_from_dir(ecu_dir, path_buf, out_prg, out_bytes);
}
