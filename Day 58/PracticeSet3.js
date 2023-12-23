// Q1 - print the marks of student using for loop

// let marks = {
//     "Akash": 98,
//     "Harry": 98,
//     "Rohan": 50
// }
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
// }

// Q2 - solve Q1 using for in loop
// for (const key in marks) {
//     const element = marks[key];
//     console.log("The marks of " + key + " is " + element);
// }

// Q3 - write a program to print "try again" until user enter correct number

// let password = 5;
// while(true) {
//     let cont = prompt("Enter a number: ");
//     if (cont == password) {
//         console.log("Correct");
//         break;
//     }
//     else {
//         console.log("Try again");
//     }
// }

// Q4 - Function program to find mean of 5 numbers
function mean(a, b, c, d, e) {
    return (a + b + c + d + e)/5;
}

meanValue = mean(5, 6, 7, 3, 5);
console.log(meanValue);