// Q1 - take input number array form users

let arr = [];
for (let i = 0; i < 5; i++) {
    let num = Number.parseInt(prompt("Enter number"));
    arr.push(num);
}

console.log(arr);

// Q2 - keep adding untill 0 is added
let num;
while (num != 0) {
    num = Number.parseInt(prompt("Enter number"));
    arr.push(num);
}
console.log(arr);

// Q3 - filter divisible by 10
let arr3 = [20, 30, 10, 4, 6, 2, 50];

const divisibleByTen = (element) => {
    if (element % 10 == 0) {
        return element;
    }
}

// console.log(arr3.filter(divisibleByTen));

// Q4 - create an array of square
let arr4 = [2, 5 , 6, 1, 5, 9];
let newArr4 = arr4.map((value) => {
    return value ** 2;
})

console.log(newArr4);

// Q5 - find the factorial using reduce
const reduceNumber = (a, b) => {
    return a * b;
}

console.log(arr4.reduce(reduceNumber));