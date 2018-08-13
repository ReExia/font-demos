
//第六章柯里化与应用
// 6.1一些术语
//6.1.1 一元函数

const identity = (x) => x;

// 6.1.2 二元函数
// const add = (x, y) => x+y;

//6.1.3变参函数
// const variadic = (a) => {
//   console.log(a);
//   console.log(arguments);
// };
//
// variadic(1,2,3);

// => 1
// => [1,2,3]

// 6.2柯里化
const add = (x, y) => x + y;
//x通过闭包被捕获
// const addCurried = x => y => x + y;
const addCurried = (x) => {
  return (y) => x + y;
};

// console.log(addCurried(2)(1));

//currt函数定义
const curry = (binaryFn) => {
  return (firstArgs) => {
    return (secondArgs) => {
      return binaryFn(firstArgs, secondArgs);
    }
  }
};

let autoCurriedAdd = curry(add);
// console.log(autoCurriedAdd(2)(2));

// 6.2.1柯里化用例

//没有柯里化的函数
const tableOf2 = (y) => 2 * y;
const tableOf3 = (y) => 3 * y;
const tableOf4 = (y) => 4 * y;

// tableOf2(4);
// tableOf3(4);
// tableOf4(4);

//可以把上述函数归类为一个单独函数
const genericTable = (x, y) => x * y;
// genericTable(2,2);
// genericTable(2,3);
// genericTable(2,4);

//柯里化表格函数
const curryTableOf2 = curry(genericTable)(2);
const curryTableOf3 = curry(genericTable)(3);
const curyTableOf4 = curry(genericTable)(4);

console.log("Table via currying");
// console.log("2 * 2 = ", tableOf2(2));
// console.log("2 * 3 = ", tableOf3(2));
// console.log("2 * 4 = ", tableOf4(2));


// 6.2.2日志函数--应用柯里化
const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {

  if (mode === "DEBUG"){
    console.debug(initialMessage, errorMessage + "at line :" + lineNo);
  }

  else if(mode === "ERROR"){
    console.error(initialMessage, errorMessage + "at line : " + lineNo);
  }

  else if(mode = "WARN"){
    console.warn(initialMessage, errorMessage + "at line : " + lineNo);
  }

  else {
    throw "Worong mode";
  }
};

//处理参数的柯里化函数
const curry2 = (fn) => {
  if (typeof  fn !== 'function'){
    throw Error('No function provided');
  }
  return function curriedFn(...args) {
      return fn.apply(null, args);
  }
};

const multiply = (x, y, z) => x * y * z;

let result = curry2(multiply)(1,2,3);
console.log("result : ", result);

const curryFinal = (fn) => {
  if (typeof fn !== 'function'){
    throw Error('No  function provided');
  }
  return function curriedFn(...args) {
      if (args.length < fn.length){
        return function () {
            return curriedFn.apply(null, args.concat([].slice.call(arguments)));
        }
      }
  }
};

//6.3柯里化实战
// 6.3.1在数组内容中查找数字
let match = curryFinal((expr, str) => {
  return str.match(expr);
});

let hasNumber = match(/[0-9]+/);

let filter = curryFinal((f, ary) => {
  return ary.filter(f);
});

let findNumbersInArray = filter(hasNumber);

findNumbersInArray(["js", "number1"]);

//求数组平方
let map = curryFinal((f, ary) => {
  return ary.map(f);
});

let squqreAll = map((x) => x * x);

squqreAll([1,2,3]);

// 6.4数据流
//6.4.1偏应用
//柯里化参数顺序是从左到右,所以有时候需要我们自己处理一些函数的参数列表，再进行柯里化

const setTimeoutWrapper = (time, fn) => {
  setTimeout(fn, time);
};

const delayTenMs = curryFinal(setTimeoutWrapper)(10);

// delayTenMs(() => console.log("Do x task"));
// delayTenMs(() => console.log("Do Y task"));


//6.4.2实现偏函数
const partial = function (fn, ...partialArgs) {

  let args = partialArgs;
  return function (...fullArguments) {
      let arg = 0;
      for(let i = 0 ; i < args.length && fullArguments.length ; i++){
        if (args[i] === undefined){
          arg[i] = fullArguments[arg++];
        }
      }
      return fn.apply(null ,args);
  };
};



let delayTenMs2 = partial(setTimeout, undefined, 10);
// delayTenMs2(() => console.log("Do Y task"));

