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
// console.log(Person2.greet());
class Bank {
    constructor(balance = 0) {
        this.balance = balance;
        this.balance = balance;
    }
}
class MpesaAccount extends Bank {
    constructor(balance = 0) {
        super(balance);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Insufficient balance');
        }
    }
    checkBalance() {
        return this.balance;
    }
}
const myMpesa = new MpesaAccount(100);
myMpesa.deposit(50);
console.log(myMpesa.checkBalance()); // 150
myMpesa.withdraw(30);
console.log(myMpesa.checkBalance()); // 120
myMpesa.withdraw(200); // Insufficient balance
class SavingAccount extends Bank {
    constructor(balance = 0, interestRate = 0.02) {
        super(balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        this.balance += this.balance * this.interestRate;
    }
    checkBalance() {
        return this.balance;
    }
}
const mySaving = new SavingAccount(1000, 0.05);
mySaving.addInterest();
console.log(mySaving.checkBalance()); // 1050
