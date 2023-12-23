// Q1 - Demonstrate for loop
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

// Q2 - demo of for in loop
// it is use to print the keys of an object

let obj = {
    name: "Naruto",
    rating: 10,
    numberOfEpisode: 720
}

for (const key in obj) {
    console.log(key);
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// Q3 - demo of for of loop
for (const chara of "Naruto") {
    console.log(chara);
}

// Q4 - demo of while loop
let it = 0;
while (it < 5) {
    console.log(it + 1);
    it++;
}

// Q5 - demo of do while loop
let i = 0;
do {
    console.log(i + 1);
    i++;
} while (i < 5);