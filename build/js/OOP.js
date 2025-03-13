"use strict";
// class Person{
//    public name:string = '';
//     public Age:number = 0;
//     constructor(_name:string ,_Age:number ){
//         this.Age =_Age;
//         this.name =_name;
//     }
//     greet():string{
//         return'hello world!';
//     }
// }
// const  Person1 =new Person( 'Timothy' ,25)
// const  Person2 =new Person( 'john' ,2345)
// console.log(Person1.Age);
// console.log(Person1.greet());
// console.log(Person2.Age);
// // console.log(Person2.greet());
// class Bank{
//     constructor(protected balance:number=0){
//         this.balance =balance
//     }
// }
// class MpesaAccount extends Bank {
//     constructor(balance: number = 0) {
//         super(balance);
//     }
//     deposit(amount: number): void {
//         this.balance += amount;
//     }
//     withdraw(amount: number): void {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log('Insufficient balance');
//         }
//     }
//     checkBalance(): number {
//         return this.balance;
//     }
// }
// const myMpesa = new MpesaAccount(100);
// myMpesa.deposit(50);
// console.log(myMpesa.checkBalance()); // 150
// myMpesa.withdraw(30);
// console.log(myMpesa.checkBalance()); // 120
// myMpesa.withdraw(200); // Insufficient balance
// class SavingAccount extends Bank {
//     private interestRate: number;
//     constructor(balance: number = 0, interestRate: number = 0.02) {
//         super(balance);
//         this.interestRate = interestRate;
//     }
//     addInterest(): void {
//         this.balance += this.balance * this.interestRate;
//     }
//     checkBalance(): number {
//         return this.balance;
//     }
// }
// const mySaving = new SavingAccount(1000, 0.05);
// mySaving.addInterest();
// console.log(mySaving.checkBalance()); // 1050
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    displaycolor() {
        console.log(`The color of the circle is ${this.color}`);
    }
}
