console.log("JS Loops");

// in JS we have 5 types of loop
// 1. for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// 2. for in loop - it will print all the keys of an object
/*
let obj = {
    name: "Akash Sharma",
    age: 21,
    skill: "Web-Developer, Java-Developer, Python-Developer"
}

// to print keys
for (const key in obj) {
    console.log(key);
}

// to print keys and values
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}
*/

// 3. for of loop - to print character by charater of a string or in an array
for (const chars of "Akash") {
    console.log(chars);
}

// 4. while loop
// 5. do while loop

// additionally we have one more loop i.e. 'for-each loop'
