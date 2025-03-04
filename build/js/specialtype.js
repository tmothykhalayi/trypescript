"use strict";
//premitive  datatypes
let firstname = "timothy";
let lastname = "nandwa";
let Age = 21;
//string interpolation
console.log(`my name is ${firstname} ${lastname} and i am ${age} years old`);
//concatenation
console.log("my name is " + firstname + " " + lastname + " and i am " + age + " years old");
//simple math operations
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(`the sum of ${num1} and ${num2} is ${sum}`);
//booleans are used to check conditions
let isAdult = true;
let isTeen = false;
if (isAdult) {
    console.log("you are an adult");
}
else {
    console.log("you are a teen");
}
//special types
//any
let something = "how are you";
console.log(typeof something);
something = 10;
console.log(typeof something);
something = true;
console.log(typeof something);
//unknown
let userinput = "Good afternoon";
userinput = 10;
userinput = true;
console.log(typeof userinput);
//void
function greet() {
    console.log("hello world");
}
greet();
