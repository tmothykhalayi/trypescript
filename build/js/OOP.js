"use strict";
class Person {
    constructor(_name, _Age) {
        this.name = '';
        this.Age = 0;
        this.Age = _Age;
        this.name = _name;
    }
    greet() {
        return 'hello world!';
    }
}
const Person1 = new Person('Timothy', 25);
const Person2 = new Person('john', 2345);
console.log(Person1.Age);
console.log(Person1.greet());
console.log(Person2.Age);
console.log(Person2.greet());
