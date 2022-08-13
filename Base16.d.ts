interface TextConverter {
  /**
   * Return Base16 encoded string.
   */
  encode(data: Uint8Array): string;
  
  /**
   * Return Base16 decoded binary (Uint8Array).
   */
  decode(str: string): Uint8Array;
}

export var Base16: TextConverter;
