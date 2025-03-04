let greet :(a:string , b:string) =>void;
greet=(name:string ,greeting:string)=>{
console.log('${name} says ${greeting}')
}

let calc :(a:number ,b:number ,c:string) => number;
calc =(numone:number ,numtwo:number,action:string)=>{
    if(action === 'add'){
        return numone +numtwo ;
    }
    else{
        return numone - numtwo ;
    }
}

let logdetails :(obj:{name:string ,age:number}) =>void;
log details =(timo{name:string ,age:number}) =>{
    console.log('${timo.name} is ${timo.age} years old')
}