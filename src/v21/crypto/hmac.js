const crypto = require("node:crypto");
function generatehmac(text, type) {
  const key = Math.random().toString().slice(-6);
  const result = crypto.createHmac(type, key).update(text).digest("hex");
  console.log(
    "🚀 ~ file: hmac.js:4 ~ generatehmac ~ result:",
    result,
    text,
    key
  );
}

let counter = 10;

while (counter--) {
  generatehmac("Hello, Lucas.", "sha1");
}
