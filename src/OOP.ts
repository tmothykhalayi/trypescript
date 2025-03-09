class Person{
    name:string = '';
    Age:number = 0;
    constructor(_name:string ,_Age:number ){
        this.Age =_Age;
        this.name =_name;
    }
    
    greet():string{
        return'hello world!';
    }
}

const  Person1 =new Person( 'Timothy' ,25)
const  Person2 =new Person( 'john' ,2345)

console.log(Person1.Age);
console.log(Person1.greet());

console.log(Person2.Age);
console.log(Person2.greet());
