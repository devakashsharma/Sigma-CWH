// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit);
// console.log(rabbit.eats);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Constructor is created");
  }
  eats() {
    console.log(`Eating`);
  }
  jump() {
    console.log(`Jumping`);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Constructor is created and he is a lion");
  }
}

// let a = new Animal();
let a = new Animal("Bunny"); // if want any specific animal then pass animal as argument
console.log(a);

let l = new Lion("Daya's Sheru");
console.log(l);

// ---------------------------------------------------------------------------------------------------------------

// getters and setters

class Users {

    constructor (name) {
        this.name = name;
    }

    // getting name
    get name () {
        return this._name;
    }

    // setting name
    set name(value) {
        if(value.length < 4) {
            console.log(`Name is too short`);
            return;
        }
        this._name = value;
    }
}

let user = new Users("John");
console.log(user.name); // John

user.name = "Akash"; // Name is too short.
console.log(user.name);

// instanceof
// syntax: object instanceof Class

l instanceof Lion