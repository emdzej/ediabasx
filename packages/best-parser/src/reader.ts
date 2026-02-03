export class BinaryReader {
  private readonly view: DataView;
  private offset = 0;

  constructor(private readonly buffer: Uint8Array) {
    this.view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  }

  get position(): number {
    return this.offset;
  }

  set position(value: number) {
    if (value < 0 || value > this.buffer.length) {
      throw new RangeError(`Reader position out of bounds: ${value}`);
    }
    this.offset = value;
  }

  readUint8(): number {
    const value = this.view.getUint8(this.offset);
    this.offset += 1;
    return value;
  }

  readUint16LE(): number {
    const value = this.view.getUint16(this.offset, true);
    this.offset += 2;
    return value;
  }

  readUint32LE(): number {
    const value = this.view.getUint32(this.offset, true);
    this.offset += 4;
    return value;
  }

  readBytes(length: number): Uint8Array {
    if (this.offset + length > this.buffer.length) {
      throw new RangeError("Reader out of bounds");
    }
    const bytes = this.buffer.slice(this.offset, this.offset + length);
    this.offset += length;
    return bytes;
  }

  readString(offset: number, length: number): Uint8Array {
    if (offset < 0 || offset + length > this.buffer.length) {
      throw new RangeError("String read out of bounds");
    }
    return this.buffer.slice(offset, offset + length);
  }
}
