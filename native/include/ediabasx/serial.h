#ifndef EDXN_SERIAL_H
#define EDXN_SERIAL_H

#include "transport.h"

typedef struct edxn_serial edxn_serial_t;

edxn_serial_t    *edxn_serial_create(const char *port);
void              edxn_serial_destroy(edxn_serial_t *s);
edxn_transport_t *edxn_serial_transport(edxn_serial_t *s);

#endif
