console.log("Hello!");
// variabel "let" kan! endre 
// variabel "const" er konstatn/permanent

// Let variabel named age saving a number 38 as data
let age = 38;
console.log(age);
console.log(typeof age)

// Const variabel named "name" saving a string Christian as data
const name = "Christian";
console.log(name);
console.log(typeof name)

// const variable Named isPresent saving a boolean true as data
const isPresent = true;
console.log(isPresent)
console.log(typeof isPresent)

// const variable firstName save string Christian as data
const firstName = "Christian"

// const variable firstName save string Gullaksen as data
const lastName = "Gullaksen"

/*
Let variabel named fullName save a string of strings and variable names
*/
let fullName = "My name is" + " " + firstName + " " + lastName;
// templet vill gi samme resultat som linjen over
// Reusing  the veriable named fullName to view the templet string method
fullName = `My name is ${firstName} ${lastName}!`
console.log(fullName)
console.log(typeof fullName)

// a variabel using DOM Manipulationc to display text to HTML element
const htmlElement = document.querySelector("#javaSkriptData");
htmlElement.textContent = fullName;




