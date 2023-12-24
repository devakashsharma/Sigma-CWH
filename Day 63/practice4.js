// Q1 - create an number of an array and take input from the user to add new number to this array

let array1 = [2, 3, 5, 1, 4];

for (let i = 0; i < 2; i++) {
    let num = prompt(`Enter the number ${i}`);
    array1.push(num);
}

console.log(array1);

// Q2 - keep pushing untill user add 0

let num;
while(num != 0) {
    let i = 1;
    num = prompt(`Enter the number ${i}`);
    i++;
    array1.push(num);
}

console.log(array1);

// Q3 - filter numbers divisible by 10 from an array
let array3 = [10, 40, 22, 4, 50]

const divisbleByTen = (element) => {
    if (element % 10 == 0) {
        let num = element;
        return num;
    }
    return 0;
}
console.log(array3.filter(divisbleByTen));

// Q4 - create an array of squares of given array
let array4 = array1.map((value) => {
    return value ** 2;
})
console.log(array4)

// Q5 - find the factorial of 5 using reduce function
let naturalArray = [1, 2, 3, 4, 5];
const factorial = (a, b) => {
    return a * b;
}
console.log(naturalArray.reduce(factorial));