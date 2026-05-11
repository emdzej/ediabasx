# @emdzej/ediabasx-logger

Structured logging for [EdiabasX](https://github.com/emdzej/ediabasx), backed by [pino](https://github.com/pinojs/pino).

## Install

```bash
pnpm add @emdzej/ediabasx-logger
```

## Usage

```ts
import { createLogger } from "@emdzej/ediabasx-logger";

const log = createLogger({ name: "my-service" });

log.info({ jobName: "FS_LESEN" }, "executing job");
log.warn({ retry: 2 }, "transient transport failure");
log.error({ err }, "job aborted");
```

### Options

```ts
createLogger({
  level: "debug",         // "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent"
  name: "interpreter",    // logger name; emitted as `name` field
  pretty: true,           // human-friendly stdout via pino-pretty (default: true outside NODE_ENV=production)
  destination: "/tmp/ediabasx.log", // write to a file instead of stdout
});
```

### Environment

`EDIABASX_LOG_LEVEL` sets the default level (overridden by `options.level`).

## License

[PolyForm Noncommercial 1.0.0](../../LICENSE).
