//union and intersections in typescript
//union
function combine(input1, input2, resultConversion){
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        return +input1 + +input2;
    }else{
        return input1.toString() + input2.toString();
    }
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

//intersection  
type Admin = {
    name: string;
    privileges: string[];
};
type Employee = {
    name: string;
    startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
const u: Universal = 1;
console.log(u);

