/* 
Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let firstName = Math.random() * 3;
let shopName = Math.random() * 3;
let lastName = Math.random() * 3;

let firstObj = {
    "one": "Crazy",
    "two": "Amazing",
    "three": "Fire"
}

let shopObj = {
    "one": "Engine",
    "two": "Food",
    "three": "Garments"
}
let lastObj = {
    "one": "Bros",
    "two": "Limited",
    "three": "Hub"
}

if (firstName <= 1 && shopName <= 1 && lastName <= 1) {
    console.log(`${firstObj.one} ${shopObj.one} ${lastObj.one}`);
}
else if (firstName <= 1 && shopName <= 2 && lastName <= 2) {
    console.log(`${firstObj.one} ${shopObj.two} ${lastObj.two}`);
}
else if (firstName <= 1 && shopName <= 3 && lastName <= 3) {
    console.log(`${firstObj.one} ${shopObj.three} ${lastObj.three}`)
}
else if (firstName <= 2 && shopName <= 1 && lastName <= 1) {
    console.log(`${firstObj.two} ${shopObj.one} ${lastObj.one}`);
}
else if (firstName <= 2 && shopName <= 2 && lastName <= 2) {
    console.log(`${firstObj.two} ${shopObj.two} ${lastObj.two}`);
}
else if (firstName <= 2 && shopName <= 3 && lastName <= 3) {
    console.log(`${firstObj.two} ${shopObj.three} ${lastObj.three}`);
}
else if (firstName <= 3 && shopName <= 3 && lastName <= 3) {
    console.log(`${firstObj.three} ${shopObj.three} ${lastObj.three}`);
}
else if (firstName <= 3 && shopName <= 2 && lastName <= 2) {
    console.log(`${firstObj.three} ${shopObj.two} ${lastObj.two}`);
}
else if (firstName <= 3 && shopName <= 1 && lastName <= 1) {
    console.log(`${firstObj.three} ${shopObj.one} ${lastObj.one}`);
}
else {
    console.log("Server Issue......");
}