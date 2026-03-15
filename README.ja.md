# Base16
Base16は、web及び[Deno](https://deno.land)で使用できるライブラリおよびESモジュールです。

## デモ
https://code4fukui.github.io/Base16/

## 機能
- Base16エンコーディングとデコーディング
- Uint8Arrayと文字列に対応

## 使い方
```js
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base16.decode("0102feff"));

console.log(Base16.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base16.decode("49636869676f4a616d")));
```

## テスト
```
deno test
```

## ライセンス
MIT