// 8函子
// 8.1.1函子是容器

const Container = function (val) {
    this.value = val;
};

// 使用箭头函数会报错
// 函数应该具有一个内部方法 [Construct] 和 [prototype] 箭头函数并不具备
// const Container = (val) => {
//     this.value = val;
// };
//
let con = new Container("xxx");

let testValue = new Container(3);
// console.log("testValue", testValue);

let testObj = new Container({a:1});
// console.log("testObj", testObj);

let testArray = new Container([1,2]);
// console.log("testArray", testArray);


//创建Container.of  使用时可以省去new关键字
Container.of = function (value) {
    return new Container(value);
};

let testValueOf = Container.of(3);

let testObjOf = Container.of({a:1});

let testArrayOf = Container.of([1,2]);

// console.log("testValueOf", testValueOf);
// console.log("testObjOf", testObjOf);
// console.log("testArrayOf", testArrayOf);

// 8.1.2 函子实现了map方法
Container.prototype.map = function (fn) {
    return Container.of(fn(this.value));
};

let double = (x) => x + x;
let result = Container.of(3).map(double);
// console.log("result", result);

// 8.2MayBe函子
const MayBe = function (val) {
    this.value = val;
}

MayBe.of = function (val) {
    return new MayBe(val);
}

//为MayBe实现map
MayBe.prototype.isNothing = function () {
    return (this.value === null || this.value === undefined);
};
MayBe.prototype.map = function (fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

//8.2.2简单用例
let mayBeResult = MayBe.of("string").map((x) => x.toUpperCase());
console.log("mayBeResult", mayBeResult);

//8.3 Either函子 解决繁殖拓展问题
const Nothing = function (val) {
    this.value = val;
};

Nothing.of = function (val) {
    return new Nothing(val);
};

Nothing.prototype.map = function (f) {
    return this;
};

const Some = function (val) {
    this.value = val;
};

Some.of = function (val) {
    return new Some(val);
};

Some.prototype.map = function (fn) {
  return Some.of(fn(this.value));
};

