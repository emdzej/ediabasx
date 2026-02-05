export class SerialTimeoutError extends Error {
  constructor(message = "Serial read timed out") {
    super(message);
    this.name = "SerialTimeoutError";
  }
}
