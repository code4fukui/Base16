# Base16

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base16 library and ES module for web and [Deno](https://deno.land).

## Demo
https://code4fukui.github.io/Base16/

## Features
- Base16 encoding and decoding
- Works with Uint8Array and strings

## Usage
```js
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base16.decode("0102feff"));

console.log(Base16.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base16.decode("49636869676f4a616d")));
```

## Test
```
deno test
```

## License
MIT