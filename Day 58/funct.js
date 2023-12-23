// functions
function welcome(name) {
    console.log("Hello " + name + " and welcome to the Sigma Batch");
    console.log("Nice to meet you " + name);
    console.log("Hajimemaste " + name);
    console.log("");
}

// function sum(a, b) {
function sum(a, b, c = 5) {
    // console.log(a + b); // this will only print and it will not assign to any value as it only for printing
    return a + b + c; // it will be return the value which will be used to assign value
}

// welcome("Akash");
// welcome("Naruto");

// test1 = sum(5); // it will return NaN (Not a Number)
// console.log("The sum of 2 number is:", test1);

// the undefine number in js consider as NaN

// add1 = sum(5, 10);
// add2 = sum(5, 8);
// add3 = sum(8, 10, 2);
// console.log("The sum of 2 number is:", add1);
// console.log("The sum of 2 number is:", add2);
// console.log("The sum of 2 number is:", add3);

// Arrow function
const func1 = (a) => {
    console.log("Ore No Wa", a);
}

func1("Eren Yeager");
func1("Shadow Garden");
func1("OO7");
console.log("means")
console.log("Bond\nJames Bond")