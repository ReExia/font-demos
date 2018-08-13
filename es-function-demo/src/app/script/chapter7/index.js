// 第七章 组合与管道

// 7.1组合的概念

//cat test.txt | grep 'world'
//左侧作为输入,输入给右侧函数


// 7.2函数式组合
//7.2.2 compose函数

//先执行b 再执行a 从右至左
const compose = (a, b) => (c) => (a(b(c)));

// 7.3 应用compose
let data = parseFloat("3.56");
let number = Math.round(data);

let cn = compose(Math.round, parseFloat);

// console.log(cn("3.56"));

let splitIntoSpaces = (str) => str.split(" ");
let count = (array) => array.length;

const countWords = compose(count, splitIntoSpaces);

let result = countWords("hello your reading about composition");
// console.log("result", result);

// 7.4管道pipe 与compose做的事情相同，只不过交换了数据流的方向
// 7.5函数式总是满足结合律
// compose(f,compose(g,h)) == compose(compose(f,g),h)
