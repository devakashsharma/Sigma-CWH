async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 1000)       
    });
}

// IIFE
(async function main() {
    let a = await sleep();
    console.log(a);
})();

function sum(a, b, c) {
    return a + b + c;
}

// De-Structuring
(async function neon() {
    // let [x, y] = [1, 3];
    // console.log(x, y);
    
    // if there are more values then variables then it will first assign values whichever come first, and ignore the rest
    // let [x, y] = [1, 3];
    
    // But if want to store the rest in an arr of anything then...
    let [x, y, ...rest] = [1, 3, 5, 7, 9, 11];
    console.log(x, y, rest);

    let obj = {
        a: 20,
        b: 30,
        c: 40
    };
    let {a, b} = obj;
    console.log(a, b);


    let arr = [1, 4, 6];
    // console.log(sum(arr[0], arr[1], arr[2])); // there's other way to do this

    console.log(sum(...arr)); // '...' is a spread opreator, it will spread all the elements
    const newArr = {...arr};
    console.log(newArr);

    let a2 = "the", b2 = "no";
    let c2 = {a2, b2};
    console.log(typeof c2);
    console.log(c2);

    // hoisting - we can declare variable name anywhere/anyline with the help of 'var', but...
    // if we declare like this:
    // console.log(newApi);
    // let newApi = xyz;
    // it will show an error

    // but if we use var
    // console.log(newApi);
    // var newApi = xyz;
    // it will work
    // it internally declare the variable before the scope, or at the top of the file

})();
