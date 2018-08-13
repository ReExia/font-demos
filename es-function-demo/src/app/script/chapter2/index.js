import forEach from "./function";
// 2.2创建并执行函数
let array = [1,2,3];
forEach(array, (data) => console.log(data));
//2.2.1第一个函数
//输出data * 2
console.log('data * 2');
forEach(array, (data) => console.log(data * 2));

