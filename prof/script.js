/**

* Exercises - Core JavaScript Concepts
  */

// 1. Variables & Data Types
let name = "John";
let age = 25;
let isStudent = true;

console.log(name, age, isStudent);

// 2. Function
function greet(user) {
return `Hello, ${user}!`;
}
console.log(greet("Alice"));

// 3. Control Flow
function checkNumber(num) {
if (num > 0) return "Positive";
else if (num < 0) return "Negative";
else return "Zero";
}
console.log(checkNumber(-5));

// 4. Arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// 5. Objects
const person = {
name: "Jane",
age: 30,
greet() {
console.log(`Hi, I'm ${this.name}`);
}
};
person.greet();

// 6. Loop
for (let i = 1; i <= 5; i++) {
console.log(`Number: ${i}`);
}

// 7. Filter Example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 8. Reduce Example
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum: ${sum}`);
