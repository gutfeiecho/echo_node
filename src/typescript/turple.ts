// 1. 定义一个元组类型的变量
const tur1: [string, string, boolean] = ["hello", "world", true];

// 2. 使用元组时，必须明确给出类型声明，不能省略， 否则TypeScript会把一个值自动推断为数组
let a = [1, true]; // a: (number|boolean)[]

// 3. 元组成员的类型可以添加问号后缀(?), 表示该元素可以省略，注意需要放在元组的最后
type myTurple = [
  number,
  number,
  string,
  string,
  number[],
  boolean?,
  undefined?
];

let tur2: myTurple = [1, 2, "hello", "world", [1, 2, 3]];

// 4. 可以使用扩展运算符(...), 不限制元组的数量, 注意扩展运算符可以对数组或者元组使用，可以放在元组的任意位置
type turpleNumUnlimited = [string, ...number[]];

const tur3: turpleNumUnlimited = ["name", 1, 2, 3, 4];
// 空数组不报错
let arr: number[] = [];

// 5. 元组的成员可以添加成员名， 除了说明元素的意义，并没有其他作用
type turpleWithInstruction = [
  age: number,
  name: string,
  idCard: number,
  gender: string
];

const tur4: turpleWithInstruction = [28, "lucas", 9527, "man"];

// 6. 元组可以通过方括号，读取成员类型
type turpleForRetrieve = [string, number];

type Age = turpleForRetrieve[1];

let age: Age = 28;

type unionType = turpleForRetrieve[number]; // turpleForRetrieve[number]表示 string|number|Date

let username: unionType = "lucas";

// 7. 可以将元组设置为只读，不允许修改, 注意元组可以替代只读元组，而只读元组不能替代元组

// 写法一
type t1 = readonly [number, string];

// 写法二
type t2 = Readonly<[number, string]>;

type t3 = [number, string];

let x: t3 = [1, "hello"];
let y: t1 = x;

//  x = y The type 't1' is 'readonly' and cannot be assigned to the mutable type 't3'.

// 8. 如果没有可选成员和扩展运算符，TypeScript会推断出元组的成员数量，如果包含了可选成员，TypeScript会推断出可能的成员数量，如果使用了扩展运算符，TypeScript就无法推断出成员数量

const arr2 = [1, 2];

function add(x: number, y: number) {
  return x + y;
}

// const result = add(...arr2); // A spread argument must either have a tuple type or be passed to a rest parameter.
console.log(...arr2); // OK

// 针对数组扩展的数量不确定，如何解决？
// 方案一
const arr3: [number, number] = [1, 2];

const result = add(...arr3); // OK

// 方案二
const arr4 = [1, 2] as const;

const result2 = add(...arr4); // OK
