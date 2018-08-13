//map
const map = (array, fn) => {
    let results = [];
    for (const value of array) {
        results.push(fn(value));
    }
    return results;
};

//filter
//局限:无法使用于作用于嵌套数组
const filter = (array, fn) => {
  let results = [];
  for (const value of array){
      fn(value) ? results.push(value) : undefined;
  }
  return results;
};

//此处push和apply需要注意一下
const concatAll = (array, fn) => {
  let results = [];
  for (const value of array){
      results.push.apply(results, value);
  }
  return results;
};

// 5.3 reduces函数
//reduces v1
// const reduce = (array, fn) => {
//     let accumlator = 0;
//     for(const value of array){
//         accumlator = fn(accumlator, value);
//     }
//     return accumlator;
// };

const reduce = (array, fn, initValue) => {
    let accumlator;
    if (initValue !== undefined){
        accumlator = initValue;
    }else {
        accumlator = array[0];
    }

    if (initValue === undefined) {
        for (let i = 1 ; i < array.length ; i++){
            accumlator = fn(accumlator, array[i]);
        }
    }else {
        for (const value of array){
            accumlator = fn(accumlator, value);
        }
    }
   return accumlator;
};

const zip = (leftArr, rightArr, fn)=> {
  let index, results = [];
  for(index = 0 ; index < Math.min(leftArr.length, rightArr.length); index++){
      results.push(fn(leftArr[index], rightArr[index]));
  }
  return results;
};

const arrayUtils = {
    map: map,
    filter : filter,
    concatAll : concatAll,
    reduce : reduce,
    zip : zip
};

export {arrayUtils}