/**
 * 【神策算法题】题目：给定一个数组arr，表示连续n天的股价，数组下标表示第几天，指标X等于任意两天的股价之和减去此两天间隔的天数。求解arr中最大指标X。
 */
const randomArray = [];
function getRandomInt() {

    // return (Math.random() * 100).toFixed(2); 四舍五入
    return Math.floor(Math.random() * 10000) / 100; // 不四舍五入
}
for(let i = 0; i < 10000; i ++) {
    randomArray.push(getRandomInt());
}

console.log('randomArray--->', randomArray);

const start = performance.now();
let maxIndicator = 0;
for(let i = 0; i < randomArray.length; i++) {
    for(let j = i + 1 ; j < randomArray.length - i - 1; j++ ) {
        if (((randomArray[i] + randomArray[j]) - (j - i)) > maxIndicator ) {
            maxIndicator = Math.floor((randomArray[i] + randomArray[j] - j + i) * 100) / 100;
        }
    }
}
const end = performance.now();
console.log('maxIndicator--->', maxIndicator);
console.log('Cost is ', `${ end - start}ms`);