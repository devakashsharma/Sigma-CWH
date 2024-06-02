// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Ethan", "Aniken", "Eren", "Naruto", "James", "Tanjiro", "Hinata", "Nezuko", "Hori", "Miyamora", "Elsa", "Loid", "Anya", "Yor"];

let house = [];

for (const student of students) {
    if(student.length <= 6) {
        house.push("Gryffindor");
    } else if(student.length > 6 && student.length <= 8) {
        house.push("Hufflepuff");
    } else if(student.length > 8 && student.length <= 12) {
        house.push("Ravenclaw");
    } else if(student.length > 12) {
        house.push("Slytherin");
    }
}

console.log(house);