//premitive  datatypes

let firstname:string = "timothy";
let lastname:string = "nandwa";
let     Age:number = 21;
//string interpolation
console.log(`my name is ${firstname} ${lastname} and i am ${age} years old`);
//concatenation
console.log("my name is "+firstname+" "+lastname+" and i am "+age+" years old");

//simple math operations
let num1:number = 10;
let num2:number = 20;
let sum:number = num1 + num2;
console.log(`the sum of ${num1} and ${num2} is ${sum}`);

//booleans are used to check conditions
let isAdult:boolean = true;
let isTeen:boolean = false;
if(isAdult){
    console.log("you are an adult");
}
else{
    console.log("you are a teen");
}
//special types
//any
let something:any ="how are you";
console.log( typeof something); 
something = 10;
console.log( typeof something);
something = true;
console.log( typeof something);


//unknown
let userinput:unknown = "Good afternoon";
userinput = 10;
userinput = true;
console.log(typeof userinput);

//void
function greet():void{
    console.log("hello world");
}
greet();
