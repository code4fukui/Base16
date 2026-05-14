# Base16


Base16は、Webおよび[Deno](https://deno.land)向けのライブラリおよびESモジュールであり、Base16のエンコードおよびデコード機能を提供します。

## デモ
デモは https://code4fukui.github.io/Base16/ で利用可能です。

## 特徴
- Base16のエンコードおよびデコード
- Uint8Arrayおよび文字列に対応

## 使い方
```js
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

console.log(Base16.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base16.decode("0102feff"));

console.log(Base16.encode(new TextEncoder().encode("IchigoJam")));
console.log(new TextDecoder().decode(Base16.decode("49636869676f4a616d")));
```

## テスト
以下のコマンドでテストを実行します:
```
deno test
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
