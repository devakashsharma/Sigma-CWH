console.log("Pratice Set 4");

// Q1 - what will be output
console.log("Akk\"".length); // 4

// Q2 - startswith and endswith
let nm = "Akash Sharma";
console.log(nm.startsWith("Ak")); // true
console.log((nm.endsWith("ma"))); // true

// Q3 - covert string to lowercase
console.log((nm.toLowerCase()));

// Q4 - extract the amount out from this string

// ChatGPT:
// let inputString = "Please give me Rs 1000";
// let regex = /Rs (\d+)/;
// let match = inputString.match(regex);

// if (match && match[1]) {
//     let amount = parseInt(match[1], 10);
//     console.log("Amount:", amount);
// } else {
//     console.log("No amount found in the string");
// }

// CWH:
let str = "Please give me Rs 1000";
console.log(str.slice(("Please give me Rs ").length));