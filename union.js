//union and intersections in typescript
//union
function combine(input1, input2, resultConversion) {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
var u = 1;
console.log(u);
