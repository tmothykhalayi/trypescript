"use strict";
let greet = Function;
greet = () => {
    console.log('hello world!');
};
const add;
(a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(10, 20);
const minus = (a, b) => {
    return a + b;
    console.log(minus);
};
minus(10, 23);
