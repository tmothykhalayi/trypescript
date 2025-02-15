var person = ['John', 30];
//acessing tupples
var person = ['John', 30];
var name = person[0]; // 'John'
var age = person[1]; // 30
//tupples with different types
var coordinates = [40.7128, 74.0060]; // latitude and longitude
var employee = ['Alice', 123, true]; // name, ID, active status
//tupples with function
// Function that returns a tuple
function getPersonInfo() {
    return ['John', 25];
}
var _a = getPersonInfo(), name = _a[0], age = _a[1];
console.log(name); // 'John'
console.log(age); // 25
var point = [10, 20];
// point[0] = 15;  // Error: Index signature in type 'readonly [number, number]' only permits reading
