// Q1 - take age as input from user and alert them if they can drive or not
let age = Number.parseInt(prompt("Enter your age"));
if (age >= 18) {
    alert("You can drive");
}
else {
    alert("You cannot drive");
}


// Q2 - use confirm if user wants to see the promt again 

// console.log(typeof cnfm);
let cnfm = confirm("Do want to do the age verification again?");
while(cnfm == true) {
    let age = Number.parseInt(prompt("Enter your age"));
    if (age >= 18) {
        alert("You can drive");
    }
    else {
        alert("You cannot drive");
    }
    cnfm = confirm("Do want to do the age verification again?");
    
}

// Q3 - write error if the age is negative
let age3 = Number.parseInt(prompt("Enter your age"));
if (age3 <= 0) {
    console.error("Negetive number is not allowed");
}
else if (age3 >= 18) {
    alert("You can drive");
}
else {
    alert("You cannot drive");
}

// Q4 - find solution

// Q5 - Change background color as per user demand
let bgColor = prompt("Which would you like - red, blue, green, orange, black, gray, white, pink");

if (bgColor == "red") {
    document.body.style.backgroundColor = "red";
}
else if (bgColor == "blue") {
    document.body.style.backgroundColor = "blue";
}
else if (bgColor == "green") {
    document.body.style.backgroundColor = "green";
}
else if (bgColor == "orange") {
    document.body.style.backgroundColor = "orange";
}
else if (bgColor == "black") {
    document.body.style.backgroundColor = "black";
}
else if (bgColor == "gray") {
    document.body.style.backgroundColor = "gray";
}
else if (bgColor == "white") {
    document.body.style.backgroundColor = "white";
}
else if (bgColor == "pink") {
    document.body.style.backgroundColor = "pink";
}