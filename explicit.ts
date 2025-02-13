let character: string;
let age: number;
let isloggedin: boolean;

age = 30;
isloggedin = true;

// Array of strings
let ninja: string[] = [];

// Union types array (string | number | boolean)
let mixed: (string | number | boolean)[] = [];
mixed.push(20);
mixed.push('hello');
mixed.push(true);

console.log(mixed);

// Object Declaration (Explicitly)
let user: { name: string; age: number; isLoggedIn: boolean } = {
  name: 'John',
  age: 25,
  isLoggedIn: true
};

console.log(user);