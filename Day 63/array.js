// JS array is used to store elements of different data types. It is the collection of different data types
// string is immutable, we cannot change it and array is mutable

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// Arrays Method
// console.log(arr.toString()); // it will convert the array into string

console.log(arr.join("-")); // 1-2-3-4-5

console.log(arr.join(" and ")); // 1 and 2 and 3 and 4 and 5

console.log(arr.pop()); // it will delete in the end
console.log(arr); // [ 1, 2, 3, 4 ]

console.log(arr.push(6));
console.log(arr); // [ 1, 2, 3, 4, 6 ]

console.log(arr.push("Akash")); // it will add in the last
console.log(arr); // [ 1, 2, 3, 4, 6, 'Akash' ]

console.log(arr.shift()); // it will delete the first element
console.log(arr); // [ 2, 3, 4, 6, 'Akash' ]

console.log(arr.unshift(11)); // it will add the first element
console.log(arr); // [ 11, 2, 3, 4, 6, 'Akash' ]

// shift is the brother of pop
// and
// unshift is the brother of push

console.log(delete arr[4]); // true
// the 'delete' will delete the specific element but when we print the arr it will empty item, means the memory is allocated but there is no value
console.log(arr); // [ 11, 2, 3, 4, <1 empty item>, 'Akash' ]

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
let c = ["Akash", "Naruto", "Killy", "Light"];

// a.concat(b, c); // it does not change the existing array i.e. 'a' instead it will return a new array

let n = a.concat(b, c);
console.log(n);
//  [
//     1,        2,       3,
//     4,        5,       6,
//     7,        8,       'Akash',
//     'Naruto', 'Killy', 'Light'
//   ]

let newArr = [45, 65, 12, 31, 6, 2, 9];
console.log(newArr.sort());
// [
//     12,  2, 31, 45,
//      6, 65,  9
// ]

let newArr2 = [6, 2, 8, 4, 5, 1];
console.log(newArr2.sort()); // [ 1, 2, 4, 5, 6, 8 ]
// so what the sort() function do is........
// it check the first position of every number or charater of element, like the 'newArr' 12 is greater than 2 but still 12 came first instead of 2

// spilce can be used to delete and add a value at the specific index

// console.log(newArr2.splice(1, 3)); // it will delete the index 1 to 3
console.log(newArr2.splice(1, 3, 7, 3, 8)); // [ 2, 4, 5 ] 
// it will delete the index 1 to 3 and now it will add '7, 3, 8' at the index of 1 to 3

console.log(newArr2); // [ 1, 7, 3, 8, 6, 8 ]

// the slice will out a given element from an existing array and create an new Array
// so, is this means the existing array won't be affect 
let newNum = [1, 2, 3, 4, 5];
let nA = newNum.slice(3);
console.log(nA); // [ 4, 5 ]
console.log(newNum); // [ 1, 2, 3, 4, 5 ]

console.log(newNum.reverse()); // it will reverse the array