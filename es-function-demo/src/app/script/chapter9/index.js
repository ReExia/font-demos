//monad一个含有chain方法的函子

import "babel-polyfill";
//10 Generator

function* gen() {
    return 'first generator';
}

let generatorResult = gen();

// console.log(generatorResult);

// console.log(generatorResult.next());
//会报空 因为上面方法的next已经取出了一次数据
// console.log(generatorResult.next().value);

// 可以理解为 generatorResult是一个消息队列 ，消费一次就结束

//10.2.3 yield关键字

function* generatorSequence() {

    yield 'first';

    yield 'second';

    yield 'third';

}

let g = generatorSequence();


// console.log(g.next().value);
//
// console.log(g.next().value);
//
// console.log(g.next().value);

//10.2.4 done属性 当队列被消费完时,done变为true
// console.log(g.next());

// console.log(g.next());

// console.log(g.next());

// console.log(g.next());

// for (let value of generatorSequence()){
//     console.log(value);
// }


//10.2.5向Generator传递数据的例子

function* sayFullName() {
    let firstName = yield;
    let secondName = yield;
    console.log(firstName + secondName);
}

let fullName = sayFullName();

// fullName.next();//第一次 fullName.next 代码返回 let firstName = yield; 并且暂停
// fullName.next('auto'); //第二次 从上一次暂停恢复, 并且传入 auto
// fullName.next('aavinth'); //第三次 从暂停处恢复 传入 aavinth 执行console.log();


//10.3 generator 处理异步调用

//简单异步函数
// let getDateOne = (cb) => {
//     setTimeout(function () {
//         //调用回调
//         cb('dummy data one');
//     }, 1000);
// };
//
// let getDateTwo = (cb) => {
//     setTimeout(function () {
//         //调用回调
//         cb('dummy data two');
//     }, 1000);
// };

//在不使用Generator的情况下调用
// getDateOne((data) => console.log("data received", data));
// getDateTwo((data) => console.log("data received", data));


//改造getData函数
let generator;

let getDataOne = () => {
    setTimeout(function () {
        //调用Generator
        //通过next传递数据
        generator.next("dummy data one");
    });
};

let getDataTwo = () => {
  setTimeout(function () {
     //调用Generator
     //通过next传递数据
     generator.next("dummy data two");
  });
};


function* main() {
    let dataOne = yield getDataOne();
    let dataTwo = yield getDataTwo();
    console.log("data one", dataOne);
    console.log("data two", dataTwo);
}

generator = main();

generator.next();

