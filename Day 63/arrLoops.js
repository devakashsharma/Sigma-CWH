let arr = [1, 2, 5, 3, 8, 4];

for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
}

// another way to print value of array
// for each loop
arr.forEach((value, i, arr1) => {
    // console.log(value, i, arr1);
    console.log(value, arr1);
})

// for in loop
let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
    console.log(key, element);
    }
}

// for of loop
for (const i of arr) {
    console.log(i);
}
    
// Suppose we have to copy an array then we can use simple 'for loop' for us or we can use 'map' for more convenient
    
// Map function

let nArray = [1, 4, 2, 6, 3, 7];
let newNArray =[];

for (let i = 0; i < nArray.length; i++) {
    const element = nArray[i];
    newNArray.push(element**2);
}
    
console.log(newNArray); // [ 1, 16, 4, 36, 9, 49 ]
    
// but there is shortcut to do it but using map function
let newArray = nArray.map(element => {
    // return element**2;
    return element;
})
console.log(newArray); // [ 1, 4, 2, 6, 3, 7 ]
    
// if we also want the index and value then we can use this
let newArrays = nArray.map((element, index, arr2) => {
    // return element**2;
    return element, index, arr2;
})
console.log(newArrays);
// [
//     [ 1, 4, 2, 6, 3, 7 ],
//     [ 1, 4, 2, 6, 3, 7 ],
//     [ 1, 4, 2, 6, 3, 7 ],
//     [ 1, 4, 2, 6, 3, 7 ],
//     [ 1, 4, 2, 6, 3, 7 ],
//     [ 1, 4, 2, 6, 3, 7 ]
// ]

// filter function
// in filter we use an user define function to filter our program, for ex
const greaterThan = (element) => {
    if(element > 5) {
        return true;
    }
    return false;
}

console.log(arr);
console.log(arr.filter(greaterThan));

// Reduce Function
// let arr = [1, 2, 5, 3, 8, 4]; // the rdce() first it will add 1 + 2 = 3, and then it will add 3 + 5 = 8 and then 8 + 3 = 11, then 11 + 8 = 19, then 19 + 4 = 23 and the final answer is 23

const rdce = (a, b) => {
    // return a*b;
    return a+b;
}
console.log(arr.reduce(rdce));

// array.from is used to create an array

// let newArr2 = [];
// newArr2.from("Akash");