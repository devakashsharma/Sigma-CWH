// Q1. create a string vairable and try to add a number to it
let str = "str";
let mar = str + 34;
let car = 34 + str;
console.log(mar);
console.log(car);

// Q2. date type of Q1
console.log(typeof mar);
console.log(typeof car);

// Q3. create a const object. can you change it to hold a number later?
const obj = {
    name: "xyz",
    Number: 34
}

Number = obj;
console.log(obj);
console.log(typeof obj)
console.log(Number);

// Q4. add a new key in problem 3
obj.city = "abcd";
console.log(obj);

obj.city = "new address"
console.log(obj);

// in js we can change the value of const

// Q5. create a word meaning dictionary of 5 words
let wordMeaning = {
    abstraction: "only show the final result not the behind work",
    encapsulation: "show only when the admin want",
    inheritance: "Inherit from the super class or parent class",
    polymorphism: "a object can have multi name",
    vaiable: "store a value like a container"
}

console.log(wordMeaning);