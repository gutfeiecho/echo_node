const crypto = require("crypto");
const fs = require("fs");

const public_key = fs.readFileSync("./rsa_public.key");
const private_key = fs.readFileSync("./rsa_private.key");

const message = "Hello, World!";

const sign = crypto.createSign("RSA-SHA256");
sign.update(message);
const signed = sign.sign(private_key, "hex");
console.log("🚀 ~ file: sign.js:12 ~ signed:", signed);

const verify = crypto.createVerify("RSA-SHA256");
verify.update(message);
const verifyResult = verify.verify(public_key, signed, "hex");
console.log("🚀 ~ file: sign.js:17 ~ verifyResult:", verifyResult);
