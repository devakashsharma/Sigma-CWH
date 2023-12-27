// append
let myDiv = document.createElement("div");
myDiv.setAttribute("class", "box1");
myDiv.innerHTML = "Watashi wa hitotsu Box desu";
// document.querySelector(".container").append(myDiv) // (container > box - box1)
// document.querySelector(".container").prepend(myDiv) // (container > box1 - box)
// document.querySelector(".container").before(myDiv) // body > box1 - (container > box)
// document.querySelector(".container").after(myDiv) // body >  (container > box) - box1