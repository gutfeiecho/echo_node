// 1. Symbol值通过Symbol() 函数生成。
let symbol1: symbol = Symbol();
let symbol2: symbol = Symbol();

console.log(symbol1 === symbol2); // false

// 2. unique symbol 表示单个值类型，只能用const来声明，
const symbol3: unique symbol = Symbol();
// const symbol4: unique symbol = symbol3; // ERR: Type 'typeof symbol3' is not assignable to type 'typeof symbol4'.

const symbol4: typeof symbol3 = symbol3;

// 3. 相同参数的Symbol.for()方法会返回相同的Symbol值，目前TypeScript无法识别这种情况
const symbol5: unique symbol = Symbol.for("foo");
const symbol6: unique symbol = Symbol.for("foo");

// 4. unique symbol类型是symbol类型的子类型，所以可以将前者赋值给后者，后者不能赋值给前者
const symbol7: unique symbol = Symbol();
const symbol8: symbol = symbol7;
// const symbol9: unique symbol = symbol8; // ERR: Type 'symbol' is not assignable to type 'unique symbol'.

// 5. unique symbol类型的作用之一就是用作属性名，symbol无法做属性名
const symbol9: unique symbol = Symbol();
const symbol10: symbol = Symbol();

interface Foo {
  [symbol9]: string;
  // [symbol10]: string; // ERR: A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type.
}

// 6. unique symbol类型可以用作类的属性值，但只能赋值给类的readonly static属性
class Student {
  static readonly foo: unique symbol = Symbol();
}

// 7. 类型推断
// let命令声明的变量，推断类型为symbol
let symbol11: symbol = Symbol();

// const命令声明的变量， 推断为unique symbol
const symbol12: symbol = Symbol();
