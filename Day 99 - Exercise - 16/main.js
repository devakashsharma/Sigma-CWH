const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

mongoose.connect("mongodb://127.0.0.1:27017/company");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

const getRandomData = (arr) => {
  let randomNo = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomNo];
}

app.get("/generate", async (req, res) => {
  // clear the collection
  await Employee.deleteMany({});

  // generate random data
  let randomNames = ["Akash", "Nitin", "Anmol", "Jatin"];
  let randomLang = ["Python", "JavaScript", "Java", "C/C++"];
  let randomCity = ["Bilaspur", "Delhi", "Raipur", "Puri"];

  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name: getRandomData(randomNames),
      salary: Math.floor(Math.random() * 1000000),
      language: getRandomData(randomLang),
      city: getRandomData(randomCity),
      isManager: (Math.random() > 0.5) ? true : false,
    });

    console.log(e)
    // await e.save()
  }

  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
