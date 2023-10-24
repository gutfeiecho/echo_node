// 实例一：
// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// const b = checkscope();
// console.log('b--->', b);

// Example 2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
const a = checkscope()();
console.log('a--->', a);