const crypto = require("node:crypto");

const fs = require("node:fs");

const publick_key = fs.readFileSync("./rsa_public.key");
console.log("🚀 ~ file: rsa.js:6 ~ publick_key:", publick_key);
const private_key = fs.readFileSync("./rsa_private.key");
console.log("🚀 ~ file: rsa.js:8 ~ private_key:", private_key);

const message = "Hello, Lucas.";

const secret = crypto.publicEncrypt(publick_key, Buffer.from(message));
console.log("🚀 ~ file: rsa.js:13 ~ secret:", secret);
const result = crypto.privateDecrypt(private_key, secret);
console.log("🚀 ~ file: rsa.js:15 ~ result:", result);
console.log("🚀 ~ file: rsa.js:15 ~ result:", result.toString());
