import {fn} from "./function";

// console.log('typeof fn',typeof fn);

// 3.1理解数据
//3.1.1理解js数据类型
//3.1.2存储函数
// let a = 1;
// tellType(a);

// 3.1.3
let tellType = (arg) => {

    arg();
    console.log("running");
};
let dataFn = () => {
    console.log("I am a function");
};
// tellType(dataFn);

// 3.1.4返回函数
//js中有名为String的内置函数
//String("HOC") -> HOC
let crazy = () => {
    return String;
};

let cfun = crazy();
// console.log(cfun("HOC"));

//3.2抽象和高阶函数
const forEach = (array, fn) => {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
};

let print = function (data) {
    console.log()
};
//data被作为参数从forEach传递到console.log()

// forEach([1,2,33],(data) => console.log(data));
//demo遍历一个js对象

//1.遍历给定对象的所有key
//2.识别key是否属于该对象本身
//3.步骤(2)为true,则获取key的值
const forEachObject = (obj, fn) => {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            fn(property, obj[property]);
        }
    }
};

let testObj = {name: '张三', age: 18, sex: '男'};
// forEachObject(testObj, (k,v) => console.log(k + ":" + v));

//创建一个名为unless的函数,接受一个断言,如果predicate为false则调用fn
const unless = (predicate, fn) => {
    if (!predicate) {
        fn();
    }
};

//用unless写一段代码查询偶数
// forEach([12,3,4,6,7,8,13,15,27],(number) => {
//    unless((number) % 2 ,() =>{
//        console.log(number,"-->是偶数")
//    })
// });

//times函数 接受一个数字,接受一个数字决定调用传入函数次数
const times = (useTimes, fn) => {
    for (let i = 0; i < useTimes; i++) {
        fn();
    }
};

// times(3,(data) => {
//    console.log("data:"+data) ;
// });

// times(3,() => {
//     console.log("i am use function");
// });

//3.3真实的高阶函数
//every函数
const every = (arr, fn) => {
    let result = true;
    for (const value of arr) {
        result = result && fn(value);
    }
    return result;
};

// console.log(every([NaN,NaN,NaN,4], isNaN));

//3.3.2some函数
const some = (arr, fn) => {
    let result = false;
    for (const value of fn(value)) {
        result = result || fn(value);
    }
    return result;
};

//3.3.3sort函数

var fruit = ['cherries', 'apples', 'bananas'];
var people = [
    {firstname: 'aaFirstName', lastname: 'cclastName'},
    {firstname: 'ccFirstName', lastname: 'aalastName'},
    {firstname: 'bbFirstName', lastname: 'bblastName'}
];

const sortBy = (property) => {
    return (a, b) => {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result;
    }
};

// people.sort(sortBy("firstname"));
// console.log(people);

//4.2真实的高阶函数
//tap接受一个高阶函数 并返回一个包含value的闭包函数,该函数将被执行
const tap = (value) => (fn) => {
    typeof (fn) === 'function' && fn(value),
        console.log(value)
};
tap('fun')(
    (it) => console.log("value is", it)
);

//unary函数
const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);
// console.log([1,2,3].map(unary(parseInt)));

//onece函数
const once = (fn) => {
    let done = false;
    return function () {
        return done ? undefined : ((done = true),fn.apply(this, arguments))
    }
};

var doPayment = once(() => {
    console.log("Playment is done")
});
// doPayment();

// 4.2.4 memoized函数
// let factorial = (n) => {
//     if (n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// };
const memoized = (fn) => {
    const lookuoTable = {};
    return (arg) => lookuoTable[arg] || (lookuoTable[arg] = fn(arg));
};
let factorial = memoized((n) => {
    if (n == 0){
        return 1;
    }
    return n * factorial(n - 1);
});

// console.log(factorial(5));