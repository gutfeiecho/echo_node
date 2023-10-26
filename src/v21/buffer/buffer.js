const buffer = Buffer.from("Hello, Lucas.", "ascii");

console.log(buffer.toString("hex"), buffer.toString("hex").length);
console.log(buffer.toString("base64"), buffer.toString("base64").length);
