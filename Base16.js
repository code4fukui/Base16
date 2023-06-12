const encode = (bin) => {
  const s = [];
  if (typeof bin == "string") {
    for (let i = 0; i < bin.length; i++) {
      const n = (bin.charCodeAt(i) & 0xff).toString(16);
      s.push(n.length === 1 ? "0" + n : n);
    }
  } else {
    for (let i = 0; i < bin.length; i++) {
      const n = bin[i].toString(16);
      s.push(n.length === 1 ? "0" + n : n);
    }
  }
  return s.join("");
};
const decode = (s) => {
  const bin = new Uint8Array(s.length);
  let n = 0;
  let flg = false;
  let bk = 0;
  for (const b of s) {
    const c = b.charCodeAt(0);
    let a = -1;
    if (c >= 48 && c <= 57) {
      a = c - 48;
    } else if (c >= 97 && c <= 102) {
      a = c - 97 + 10;
    } else if (c >= 65 && c <= 70) {
      a = c - 65 + 10;
    }
    if (a >= 0) {
      if (!flg) {
        bk = a;
      } else {
        bin[n++] = (bk << 4) | a;
      }
      flg = !flg;
    }
  }
  const res = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = bin[i];
  }
  return res;
};

export const Base16 = { encode, decode };
