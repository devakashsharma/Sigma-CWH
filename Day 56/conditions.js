let age = 25;

// if(age <= 18) {
//     console.log("you can drive");
// }
// else {
//     console.log("You cannot drive");
// }

// Node.js Repl
// R - Read
// E - Value
// P - Print
// L - loop

let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);

// Arithmetic Operator
// + = Addition
// - = Subtraction
// * = Multiplication
// / = Division
// ** = Exponational
// % = Modulas
// ++ = Increment
// -- = Decrement

// Assignment Operator
// =, +=, -=, /=, *=, **=, **=, %=

// Comparison Operator
// == = is equal to
// === = is equal to and type
// != = not equal to
// !== = not equal to and type
// > = greater than
// < = smaller than
// >=, <=, 
// ? = ternary operator

let ne = "3" == 3;
console.log(ne);
ne = "3" === 3;
console.log(ne);

// Logical operator
// &&, ||, !

/*
This 
is
Multiline
Comment
*/

// if, else-if, else

if (age > 0 && age <= 5) {
    console.log("You are kid");
}
else if (age >= 6 && age <= 11) {
    console.log("You are a child");
}
else if (age >= 12 && age <= 18) {
    console.log("You are a Teenager");
}
else if (age >= 19 && age <= 25) {
    console.log("You are pre-adult");
}
else if (age >= 26) {
    console.log("You are an adult");
}
else {
    console.log("Enter valid Number");
}

// Ternary Operator
let at = 7;
let bt = 14;
let ct = at > bt ? (at - bt) : (bt - at);

console.log(ct);

if (ct == 7) {
    console.log("7 - Thala for reason");
}