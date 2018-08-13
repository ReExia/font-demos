//forEach函数定义
// const forEach = (array, fn) => {
//     for(const value of array){
//         fn(value);
//     }
// };

import {arrayUtils} from "./arrayUtils";

let appressBooks = [
    {
        'id': 111,
        'title': 'c# 6.0',
        'author': 'ANDREW TROELSEN',
        'rating': 4.7,
        'reviews': [{good: 4, excellent: 12}]
    },
    {
        'id': 222,
        'title': 'EF Learning Machines',
        'author': 'Rahul',
        'rating': 4.5,
        'reviews': []
    },
    {
        'id': 333,
        'title': 'Pro AngularJs',
        'author': 'Adam',
        'rating': 4.0,
        'reviews': []
    },
    {
        'id': 444,
        'title': 'Pro ASP.NET',
        'author': 'Adamm4 Freeman',
        'rating': 4.2,
        'reviews': [{good: 14, excellent: 12}]
    }

];

let appressBooks2 = [

    {
        name: 'beginners',
        bookDetails: [
            {
                'id': 111,
                'title': 'c# 6.0',
                'author': 'ANDREW TROELSEN',
                'rating': 4.7,
                'reviews': [{good: 4, excellent: 12}]
            },
            {
                'id': 222,
                'title': 'EF Learning Machines',
                'author': 'Rahul',
                'rating': 4.5,
                'reviews': []
            },
            {
                'id': 333,
                'title': 'Pro AngularJs',
                'author': 'Adam',
                'rating': 4.0,
                'reviews': []
            },
            {
                'id': 444,
                'title': 'Pro ASP.NET',
                'author': 'Adamm4 Freeman',
                'rating': 4.2,
                'reviews': [{good: 14, excellent: 12}]
            }
        ]
    }
];

let results = arrayUtils.map([1, 2, 3], (itemValue) => itemValue * 3);
// console.log(results);

let mapBooks = arrayUtils.map(appressBooks, (book) => {
    return {title: book.title, author: book.author}
});
// console.log(mapBooks);

let fliterBooks = arrayUtils.filter(appressBooks, (book) => {
    return book.rating >= 4.5
});
// console.log(fliterBooks);


//5.2链接操作
let conactBooks = arrayUtils.map(
    arrayUtils.filter(appressBooks, (book) => {
        return book.rating > 4.5
    }),
    (book) => {
        return {title: book, author: book.author}
    }
);
// console.log(conactBooks);

let goodRatingRules = (book) => book.rating > 4.5;
let concatAllResults = arrayUtils.concatAll(appressBooks2, (book) => {
    return book.bookDetails;
});
let concatBooks = arrayUtils.filter(concatAllResults, goodRatingRules);
// console.log(conactBooks);

//acc * val如果这样就不行，算出来是0
let useless = [2, 5, 6, 1, 10];
let result = 0;
let countResult = arrayUtils.reduce(useless, (acc, val) => {
    return acc + val;
});
// console.log(countResult);

let countResult2 = arrayUtils.reduce(useless, (acc, val) => acc * val, 1);
// console.log(countResult2);
let zipCount = arrayUtils.zip([1, 2, 3], [4, 5, 6], (x, y) => {
    return x + y;
});
console.log(zipCount);