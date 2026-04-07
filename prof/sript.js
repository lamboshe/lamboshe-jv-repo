/**

* Calculator Function
* Handles basic operations
  */

function calculate(num1, num2, operator) {
// Validate inputs
if (typeof num1 !== "number" || typeof num2 !== "number") {
return "Error: Inputs must be numbers";
}

switch (operator) {
case "+":
return num1 + num2;

```
case "-":
  return num1 - num2;

case "*":
  return num1 * num2;

case "/":
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;

case "%":
  return num1 % num2;

default:
  return "Error: Invalid operator";
```

}
}

// Example usage
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // Error
