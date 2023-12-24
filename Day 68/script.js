let jackHarper = document.getElementsByClassName('box');
console.log(jackHarper)
jackHarper[2].style.backgroundColor = "orange";
jackHarper[1].style.backgroundColor = "red";

document.getElementById("four").style.backgroundColor = "lightblue";
// document.getElementById("four").style.borderColor = "blue";

// we can also use the css query selector
document.querySelector(".box").style.backgroundColor = "purple";

// when we use querySelector() it only applying at the first element
// querySelectorALl will apply to the all element
// but there is a catch, and that is
// when we console our qSA then it will return a nodelist which is kind of array, and in general whenever we have to do some performance we use for loop to traverse the element. right?, so at here we will do the same

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "Skyblue";
})

let newDiv = document.getElementsByTagName("div");

newDiv[3].matches("#four");

// we also have "closest" which will return the value of closest element, at first it will the current class then it goes to the parent class, if still not found then it go to parent's parent class and so on
newDiv[3].closest(".container");

// contains will return true if parent is containing value
document.querySelector(".container").contains(newDiv[3]);

document.querySelector("body").contains(document.querySelector(".container"));