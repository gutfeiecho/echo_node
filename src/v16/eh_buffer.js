// Create a TypedArray with a size in bytes
// const typedArray1 = new Int8Array(8);
// typedArray1[0] = 32;

// const typedArray2 = new Int8Array(typedArray1);
// typedArray2[1] = 42;

// console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

// console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]

const array = new Array(9999999999);
const arrayBuffer = new Int8Array(9999999999);

console.time("原始array执行时间：");
