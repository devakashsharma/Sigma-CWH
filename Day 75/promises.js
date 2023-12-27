let prom = new Promise ((resolve, reject) => {
    let a = Math.random();
    if (a < 0.3) {
        reject("No random number was not supporting you");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done");
            resolve("Akash");
        }, 2000);
    }
})
let prom2 = new Promise ((resolve, reject) => {
    let a = Math.random();
    if (a < 0.3) {
        reject("No random number was not supporting you 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 2");
            resolve("Akash Sharma");
        }, 2000);
    }
})

// prom.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// prom.catch((err) => {
//     console.log(err);
// });


// let p3 = Promise.all([prom, prom2]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.allSettled([prom, prom2]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

// let p3 = Promise.race([prom, prom2]);
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// });

let p3 = Promise.any([prom, prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});
