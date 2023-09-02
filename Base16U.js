import { Base16 } from "./Base16.js";

export const Base16U = {
  encode: (bin) => Base16.encode(bin).toUpperCase(),
  decode: (s) => Base16.decode(s),
};
