const vm = require('vm');

const x = 1;

const context = { x: 2};

// 将context对象上下文化
vm.createContext(context);

const code = ' x += 40; var y = 17;';

vm.runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17
 
console.log(x); // 1 