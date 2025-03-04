let greet=Function;
greet=()=>{
    console.log('hello world!');
}
const add(a:number ,b:number ,c?:number|string =10)=>{
    console.log(a+b);
    console.log(c);
}
add(10,20);

const minus =(a:number ,b:number):number=>{
    return a +b;
    console.log(minus);
}
minus(10,23);

//functions
const add =(a :number,b:number)=>{
    return a + b
}
const logmsg =(message:any ):void=>{
    console.log(message)
}
logmsg ('hello')
logmsg(add(2 ,3))

type mathfunction =(a:number,b:number) =>number
let multiply:mathfunction =function(c ,d){
    return c*d
}
logmsg(multiply(3,5));

//rest parameters
const total = (...nums:number[]):number =>{
    return a +nums.reduce((prev ,curr) =>prev + curr)

}
logmsg(total(2 , 3 ,4))
//never function
const createerror =(errmsg:string):never=>{
    throw new Error(errmsg); 

}
const infinite =()=>{
    let i:number=1;
    while(true){
        i++
        if( i >100)break
    }

}