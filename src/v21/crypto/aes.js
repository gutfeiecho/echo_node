const crypto = require("node:crypto");
function encode(src, key, iv) {
  let sign = "";
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  sign += cipher.update(src, "utf8", "hex");
  sign += cipher.final("hex");
  return sign;
}

function decode(sign, key, iv) {
  let src = "";
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  src += decipher.update(sign, "hex", "utf8");
  src += decipher.final("utf8");
  return src;
}

const key = "37725295ea78b626";
const iv = "efcf77768be478cb";

const src = "hello, my name is wenzi! my password is `etu^&&*(^123)`";
const sign = encode(src, key, iv);
const _src = decode(sign, key, iv);

console.log("key: ", key, "iv: ", iv);
console.log("原文：", src);
console.log("加密后: ", sign);
console.log("解密后: ", _src);
