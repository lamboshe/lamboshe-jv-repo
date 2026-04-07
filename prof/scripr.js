/**

* Student Grade Tracker
  */

const students = [
{ name: "Alice", scores: [85, 90, 78] },
{ name: "Bob", scores: [70, 88, 95] },
{ name: "Charlie", scores: [60, 75, 80] }
];

function calculateAverage(scores) {
const total = scores.reduce((sum, score) => sum + score, 0);
return total / scores.length;
}

function getGrade(avg) {
if (avg >= 90) return "A";
if (avg >= 80) return "B";
if (avg >= 70) return "C";
if (avg >= 60) return "D";
return "F";
}

function processStudents(data) {
data.forEach(student => {
const avg = calculateAverage(student.scores);
const grade = getGrade(avg);

```
console.log(`Name: ${student.name}`);
console.log(`Average: ${avg.toFixed(2)}`);
console.log(`Grade: ${grade}`);
console.log("-------------------");
```

});
}

processStudents(students);
