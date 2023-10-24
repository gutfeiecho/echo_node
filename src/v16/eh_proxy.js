const box = {
    a: '222'
}

const fakeWindow = new Proxy(window, {
    get(target, key) {
        return box[key] || window[key];
    },
    set(target, key, value) {
        box[key] = value;
        return true;
    }
})

const code = `(function(window) {
    window.a = '111';
    console.log(window.a);
})`;

/**
 * Function() 构造函数创建了一个新的Function对象。直接调用构造函数可以动态创建函数，但可能会经受一些安全和类似于eval()的性能问题。然而，不像eval（可能访问到本地作用域）
 * Function构造函数只创建全局执行的函数。
 */
const fn = new Function('window', code);

console.log('PROXY!!')

fn(fakeWindow)

console.log('window--->', fakeWindow.a) // window---> 222