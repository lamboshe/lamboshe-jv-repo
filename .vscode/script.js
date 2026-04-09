#Variables & Data Types#
let name = "Alice";
const age = 20;
let isStudent = true;
let score = 95.5;

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent);// boolean

Functions

function greet(user) {
  return "Hello, " + user;
}

console.log(greet("John"));

Control Flow (if/else)

let marks = 75;

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

Loops

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

Arrays
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
fruits.pop();

fruits.forEach(fruit => console.log(fruit));

Objects
let student = {
  name: "Jane",
  age: 22,
  grade: "A"
};

console.log(student.name);
student.age = 23;

Array of Objects (Important for Grade Tracker)
let students = [
  { name: "John", score: 80 },
  { name: "Mary", score: 90 }
];

students.forEach(s => {
  console.log(s.name, s.score);
});