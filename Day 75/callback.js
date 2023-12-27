console.log("Ore No wa Naruto desu")
console.log("Ore No wa Eren")

setTimeout(() => {
    console.log("alask");
}, 5000)

console.log("It will print before the timeout function");

// callback is the method to pass a function as an argument

const callback = (arg) => {
    console.log(arg);
}

let loadScript = (src, callback) => {
    let a = document.createElement("script");
    a.src = src;
    a.onload = callback;
    document.head.append(a);
}

// if callback is calling to another function and that another function is calling to the another function and so on
// and this is known as callback hell and in order to deal with we use 'promises'