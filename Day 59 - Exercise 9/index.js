/* 
Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times
*/

// CWH's Code

let random = Math.random();
console.log(random);

let num1 = prompt("Enter first number: ");
let operation = prompt("Enter operation: ");
let num2 = prompt("Enter second number: ");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    console.log(`The answer is ${num1} ${operation} ${num2}`);
    alert(`The answer is ${eval(`${num1} ${operation} ${num2}`)}`);
}
else {
    operation = obj[operation]
    console.log(`The answer is ${num1} ${operation} ${num2}`);
    alert(`The answer is ${eval(`${num1} ${operation} ${num2}`)}`);
}