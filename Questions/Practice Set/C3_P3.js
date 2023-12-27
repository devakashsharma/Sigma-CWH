// Q1 - print marks of student using for loop (from object)
let obj1 = {
    "Akash": 99,
    "Akash2": 98,
    "Akash3": 99
}

for (let i = 0; i < Object.keys(obj1).length; i++) {
    console.log("The marks of " + Object.keys(obj1)[i] + " is " + obj1[Object.keys(obj1)[i]]);
}

// Q2 - solve q1 by using for in loop
for (const key in obj1) {
    const element = obj1[key];
    console.log(key,element)
}

// Q3 - print try again untill user give correct number

let num = 0;
while(num != 5) {
    num = prompt("Enter Number");
    if (num != 5) {
        console.log("Try again");
    }
}

// Q4 - function to find mean of 5
function mean(a, b, c, d, e) {
    return (a + b + c + d + e)/5;
}

let num1 = mean(3, 5, 7 , 3, 6);
console.log(num1);