// Exericse - 11 

let arr = [1, 2, 3, 4, 5, 6];

// factorial using reduce
const factorial = (a, b) => {
    return a * b;
}

console.log(arr.reduce(factorial));

// factorial using for loop

let result = 1;

for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
console.log(result);