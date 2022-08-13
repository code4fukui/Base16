# Base16 - hex encoding

- Base16 library
- ES module for web and [Deno](https://deno.land)

## alphabet

0-9 / a-f

## usage

```js
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base16.decode("0102feff"));

console.log(Base16.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base16.decode("49636869676f4a616d")));
```

## sample app

https://code4fukui.github.io/Base16/

## test

```
deno test
```

## sample implementation in IchigoJam BASIC

```
10 S="IchigoJam"
20 FORI=0TOLEN(S)-1:?HEX$(PEEK(S+I),2);:NEXT:?
```
