let person: [string, number] = ['John', 30];
//acessing tupples
let person: [string, number] = ['John', 30];

let name = person[0];  // 'John'
let age = person[1];   // 30

//tupples with different types
let coordinates: [number, number] = [40.7128, 74.0060]; // latitude and longitude
let employee: [string, number, boolean] = ['Alice', 123, true]; // name, ID, active status

//tupples with function
// Function that returns a tuple
function getPersonInfo(): [string, number] {
    return ['John', 25];
  }
  
  let [name, age] = getPersonInfo();
  console.log(name); // 'John'
  console.log(age);  // 25
  




let point: readonly [number, number] = [10, 20];

// point[0] = 15;  // Error: Index signature in type 'readonly [number, number]' only permits reading
