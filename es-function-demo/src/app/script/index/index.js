//1.函数必须总是结接受一个参数
//2.函数必须总是返回一个值
//3.函数应该依据接收到的参数而不是外部运行
//4.对于一个给定的X,只会输出一个唯一的Y

//demo1
// let percentValue = 5;
//
// let calculateTax = (value) => {
// 	return value/100 * (100+percentValue)
// };
//
// let result = calculateTax(5);
// console.log('result', result);
//该函数在数学的意义上并不能称之为函数,因为他依赖了全局变量percentValue

//demo2
//现在函数calculateTax可以成为一个真正的函数了
//消除了对全局变量的访问
//函数式编程是一种范式,我们能够仅仅依赖输入就能完成自身逻辑的函数
//函数不会改变任何外部环境的变量
//将产生可缓存，可测试的代码库
// let param = 100;
// let calculateTax = (value, percentValue) => {
// 	return value/100 * (100+percentValue)
// };

//函数与一段可以通过其名称被调用的代码,他可以传递参数并返回
//方法是一段必须通过其名称及其关联对象的名称,被调用的代码
//函数
// let simple = (a) =>{
// 	return a;
// };
// simple(5);

//方法
// let obj = {
// 	simple : (a) => {
// 		return a;
// 	}
// };
// obj.simple(5);

//demo3
//命令方式遍历数组
//我们告诉编译器活的数组，循环数组，用索引获取每一个数组元素
// let array = [1,2,3];
// for (let i=0 ; i < array.length ; i++){
// 	console.log(array[i]);
// };

//声明式编程
//我们告诉编译器做什么，如何做被抽象到普通函数(高阶函数)
// let array = [1,2,3];
// array.forEach(
// 	(elemenet) => console.log(elemenet)
// );

//纯函数
// let double = (value) => value * 2;
// let a = double(5);
// console.log("double(5)", double(5));

//1.6并发代码
let global = "something";
// let function1 = (input) => {
// 	//处理input
// 	//改变global
// 	global = 'somethingElse';
// };

// let function2 = () => {
// 	if (global === 'something'){
// 	}
// };

//如果此时并发引用function1 function2并发的执行这些函数就会引起不良影响

//改为纯函数
let function1 = (input,global) => {
	//改变input
	//改变global
	global = "somethingElse";
};

let function2 = (global) => {
	if (global === "something"){
		//业务逻辑
	}
};

//1.7可缓存
// let longRunningFunction = (ip) => {
// 	//do long running tasks and return
// };
//用于缓存结果 key(输入) : value(输出)
// let longRunningFnBookKeeper = {};

//1.8管道与组合

// 1.9纯函数与数学函数
// let longRunningFunction = (ip) => {
// 	let longRunningFnBookKeeper = {2 : 3, 4 : 5}
// 	longRunningFnBookKeeper.hasOwnProperty(ip) ?
// 			longRunningFnBookKeeper[ip] :
// 			longRunningFnBookKeeper[ip] = ip;
// 	return longRunningFnBookKeeper;
// };
// let longRunResult = longRunningFunction(1);
// longRunResult = longRunningFunction(10);
// console.log('result', longRunResult);
