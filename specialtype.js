//premitive  datatypes
var firstname = "timothy";
var lastname = "nandwa";
var Age = 21;
//string interpolation
console.log("my name is ".concat(firstname, " ").concat(lastname, " and i am ").concat(age, " years old"));
//concatenation
console.log("my name is " + firstname + " " + lastname + " and i am " + age + " years old");
//simple math operations
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("the sum of ".concat(num1, " and ").concat(num2, " is ").concat(sum));
//booleans are used to check conditions
var isAdult = true;
var isTeen = false;
if (isAdult) {
    console.log("you are an adult");
}
else {
    console.log("you are a teen");
}
//special types
//any
var something = "how are you";
console.log(typeof something);
something = 10;
console.log(typeof something);
something = true;
console.log(typeof something);
//unknown
var userinput = "Good afternoon";
userinput = 10;
userinput = true;
console.log(typeof userinput);
//void
function greet() {
    console.log("hello world");
}
greet();
