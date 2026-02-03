function xorTransform(data: Uint8Array, key: Uint8Array): Uint8Array {
  if (key.length === 0) {
    throw new Error("XOR key must not be empty.");
  }

  const result = new Uint8Array(data.length);
  for (let index = 0; index < data.length; index += 1) {
    result[index] = data[index] ^ key[index % key.length];
  }

  return result;
}

export function xorDecrypt(data: Uint8Array, key: Uint8Array): Uint8Array {
  return xorTransform(data, key);
}

export function xorEncrypt(data: Uint8Array, key: Uint8Array): Uint8Array {
  return xorTransform(data, key);
}
