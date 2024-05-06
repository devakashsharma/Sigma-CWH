// CRUD

use("CurdDB")

// console.log(db);

db.createCollection("courses")

// C - Create
db.courses.insertOne({
    name: "DataBase",
    price: 0,
    mentor: "Akash",
    assignment: 10,
    projects: 20
})

// R - Read

let readFile = db.courses.find({price: 0})
console.log(readFile);

let readFileOne = db.courses.findOne({price: 0})
console.log(readFileOne);


// U - Update
db.courses.updateOne({price: 0}, {$set:{price: 1000}})

// D - Delete
db.courses.deleteOne({price: 0})

// https://www.mongodb.com/docs/manual/reference/operator/query/