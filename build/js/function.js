var greet = Function;
greet = function () {
    console.log('hello world!');
};
var add;
(function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
});
add(10, 20);
var minus = function (a, b) {
    return a + b;
    console.log(minus);
};
minus(10, 23);
