import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base16 } from "./Base16.js";

Deno.test("encode", () => {
  t.assertEquals(Base16.encode(new Uint8Array([1, 2, 3])), "010203");
  t.assertEquals(Base16.encode(new Uint8Array([])), "");
  t.assertEquals(Base16.encode(new Uint8Array([0])), "00");
  t.assertEquals(Base16.encode(new Uint8Array([255])), "ff");  
});
Deno.test("decode", () => {
  t.assertEquals(Base16.decode("010203"), new Uint8Array([1, 2, 3]));
});
