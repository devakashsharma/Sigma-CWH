function getDatas() {
   // stimulate getting data from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    })
}

// // consider the logs as functions

console.log("Loading modules");
console.log("Loading data"); // loading data can take time to fetch, and js is Asynchronous in nature so it will go for the next function that is processed data, so that is why we need await to wait for the load data
// so will use 'promises' to set the time for the 'async/await'
let data = getDatas();
// console.log(data);

// console.log("Processed Data");
// console.log("task 2");

// if we want wait till the load then we can use .then function data
data.then((v)=> {
    console.log(data);
    
    console.log("Processed Data");
    console.log("task 2");
});

// we can use this approach but we do have another approach to write it in a clean code i.e. 'async/await'
// in order to async we will do:

async function getData() {
    // stimulate getting data from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3000);
    })
}

async function main() {
    console.log("Loading modules");
    console.log("Loading data");
    let data1 = await getData();
    console.log(data1);
    
    console.log("Processed Data");
    console.log("task 2");
}

// and after defining we will be need to call this function
main();

// fetching API
async function getFetchData() {
    // stimulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let data = await x.text(); // to get the data in string (text)
    let data = await x.json();
    console.log(data);
}

async function main() {
    console.log("Loading modules");
    console.log("Loading data");
    let data1 = await getFetchData();
    console.log(data1);
    
    console.log("Processed Data");
    console.log("task 2");
}

// and after defining we will be need to call this function
main();

// Post - is used to post the sensitive data to the server, suppose we don't want our login detail shows on the url of any website, for that we use Post.

// Get - is used to get the data from the server, if we want download anything such as mp4, mp3 or pdf files, so for them we use Get.

// we can also get some examples of fetch data on MDN