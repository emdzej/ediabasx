// Node-only entry point. Kept off the default `index.ts` so the browser
// bundle doesn't pull in `serialport` (a native dep that can't be bundled
// for the web).
export { NodeSerialTransport } from "./nodeSerialTransport";
