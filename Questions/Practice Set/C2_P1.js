// Q1 - find if age is lies between 10 and 20
let myAge = 20;
if (myAge >= 10 && myAge <= 20) {
    console.log("Your age is lies between 10 to 20");
}
else {
    console.log("Your age is does not lies between 10 to 20");
}

// Q2 use switch case
let numb = 2;
switch (numb) {
    case 1: 
        numb = "One";
        console.log(numb);
        break;
    case 2:
        numb = "Two";
        console.log(numb);
        break;
    case 3:
        numb = "Three";
        console.log(numb);
    default : {
        console.log(numb);
    }
}

// Q3 find if a number is divisible by 2 or 3
let num = 4;
if (num % 2 == 0) {
    console.log(num, "is divisible by 2");
}

else if ( num % 3 == 0) {
    console.log(num, " is divisible by 3");
}

else {
    console.log("No, this number is not");
}

// Q4 if a number is divisible by either 2 or 3
let nums = 4;
if (nums % 2 == 0 || nums % 3 == 0) {
    console.log(nums, "is divisible by either 2 or 3");
}

else {
    console.log("No, this number is not");
}

// Q5 if age is 18+ print "You can Drive" and if not then "You cannot Drive"
let age = 21;
if (age >= 18) {
    console.log("You can Drive");
}
else {
    console.log("You cannot Drive");
}
