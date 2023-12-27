// Q1 - change the color of the first element
let cont = document.querySelector(".container") // undefined
cont.childNodes // NodeList(3) [text, ul, text]
cont.childNodes[1] // <ul>​…​</ul>​flex
let contUl = cont.childNodes[1] // undefined
contUl.firstElementChild.style.color = "red";

// Q3 - change the color of the first and last element child to green
contUl.firstElementChild.style.color = "green";
contUl.lastElementChild.style.color = "green";

// Q4 - change the background color of li
for (let i = 0; i < contUl.children.length; i++) {
    contUl.children[i].style.backgroundColor = "yellow"
}