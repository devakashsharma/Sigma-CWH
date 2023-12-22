console.log("JavaScript Variables");

var a = 4;
var b = 5;
var c = "Akash"
// console.log(a + b + 5);
// console.log(typeof a + " " + typeof b + " " + typeof c);
// console.log(typeof a, typeof b, typeof c);

// var is globally scoped and let & const are block scoped


let ab  = 5;
console.log(ab);

{
    let ab = 52;
    console.log(ab)
}

console.log(ab);

// Data Types in JS
// Primitive Data Types and Objects
// Primitive Data Types have 7 types

// 1. Null - Nothing
let nu = null;

// 2. Number - All numbers like 3, 4.56
const pie = 3.14;
let num = 3;

// 3. String - All charaters inside the " "
let name = "Akash";

// 4. Symbol

// 5. undefined - Variable is declare but value not assign
let value = undefined;

// 6. Boolean - True or False
const istrue = true;

// 7. BigInt - Used to store big integer values


console.log(nu, pie, num, name, value, istrue)
console.log(typeof nu, typeof pie, typeof num, typeof name, typeof value, typeof istrue)

// Objects are userdefine data types
let obj = {
    name: "Akash Sharma", // we can use "" to keys but it is optional but if variable name having space then we would need to use.
    "job code": 303
}

console.log(obj);

obj.salary = 150000;
console.log(obj);

obj.salary = 1500000;
console.log(obj);