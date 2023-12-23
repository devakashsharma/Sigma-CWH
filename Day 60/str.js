let a = "Akash";
console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]); // js is also known as forgiving language because it tries to show less error as possible, like here it is input error but then also it is showing undefine

console.log(a.length);

// if we have to write like this
let name = "Akash";
let frd = "Naruto";

console.log("Ore no wa " + name +  " and watashi no tomodachi wa " + frd + " desu");
// isn't a little bit hetic to write this manually, but there is shortcut i.e. template literals, it is not as you think, you have to write mannully but in a little easy way, for that we will use backtics instead of quotes

console.log(`Ore no wa ${name} and watashi no tomodachi wa ${frd} desu`);
// when we use ${var} it is known as string interpolation

let ab = "AkAsh";
console.log(ab);
console.log(ab.toUpperCase());
console.log(ab.toLowerCase());
console.log(ab.slice(0, 3));
console.log(ab.slice(2));
console.log(ab.replace("AkA", "Aka"));
console.log(ab.concat(" ", a, " Naruto", " GomoGomo"))

let as = "     Akash    ";
console.log(as);
console.log(as.trim());
console.log(ab.charAt(0));
console.log(ab.indexOf("s"));
console.log(ab.startsWith("Ak"));
console.log(ab.endsWith("sh"));