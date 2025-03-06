//generics
const echo =<T>(arg:T ,): T=>arg
const  isObj = <T>(arg:T ,):boolean =>{
    return(typeof arg ==='object' && !Array.isArray(arg) && arg !==null)
}
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj(1234));
console.log(isObj(null));

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
console.log(output); // Outputs "Hello"

interface Box<T> {
    item: T;
    getItem: () => T;
}

const numberBox: Box<number> = {
    item: 42,
    getItem: function() {
        return this.item;
    }
};

const stringBox: Box<string> = {
    item: "Hello",
    getItem: function() {
        return this.item;
    }
};

console.log(numberBox.getItem()); // 42
console.log(stringBox.getItem()); // "Hello"


interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<string, number> = {
    first: "Age",
    second: 30
};

console.log(pair.first);  // "Age"
console.log(pair.second); // 30

interface IdentityFunction<T> {
    (arg: T): T;
}

const Identity: IdentityFunction<number> = (x) => x;
const stringIdentity: IdentityFunction<string> = (x) => x;

console.log(identity(42)); // 42
console.log(stringIdentity("Hello")); // "Hello"


interface Comparable<T> {
    compareTo(other: T): number;
}

class Person implements Comparable<Person> {
    constructor(public name: string, public age: number) {}

    compareTo(other: Person): number {
        return this.age - other.age;
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.compareTo(person2)); // 5


interface Dictionary<T> {
    [key: string]: T;
}

const stringDictionary: Dictionary<string> = {
    name: "Alice",
    city: "Wonderland"
};

const numberDictionary: Dictionary<number> = {
    age: 30,
    year: 2025
};

console.log(stringDictionary.name); // "Alice"
console.log(numberDictionary.age);  // 30
