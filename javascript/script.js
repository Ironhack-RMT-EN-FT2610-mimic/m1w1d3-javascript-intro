console.log("Hello World from the script.js");

console.log("Another log in the console");

// we are learning about JS

/* 
multi
line
comments
*/

console.log("hello", "bye", "hello again");


// variable declaration
let hobby;

console.log(hobby) // undefined

// variable initialization
hobby = "Climbing"

console.log(hobby)

// assigning a new value
hobby = "Playing Videogames"

console.log(hobby)

let anotherHobby = "Reading"
console.log(anotherHobby)

let lastHobby = hobby
console.log(lastHobby)


// let and const

const age = "30";
console.log(age)

// age = 31 // Assignment to constant variable.

// const someVariable; // SyntaxError: Missing initializer in const declaration


// things we can't or should not do when creating variables

// let 1fruit;
// let import
// let myfavouritemovieintheworld
let myFavouriteMovieInTheWorld;


// Data Types

let variable1 = true
console.log(variable1, typeof variable1)

let variable2 = "hello"
console.log(variable2, typeof variable2)

let variable3 = 50
console.log(variable3, typeof variable3)

let variable4 = undefined
console.log(variable4, typeof variable4)

let variable5 = null
console.log(variable5, typeof variable5) // error. it should be "null"

let variable6 = [ "hello", "bye" ]
console.log(variable6, typeof variable6)

let variable7 = { name: "Bob" }
console.log(variable7, typeof variable7)


// Strings

let fruit1 = "strawberry"
let fruit2 = "pear"
let fruit3 = "watermelon"


// String concatenation
// let recipe = "The recipe for the smoothie includes: " + fruit1 + ", " + fruit2 + fruit3

// String interpolation
let recipe = `The recipe for the smoothie includes: ${fruit1}, ${fruit2} and ${fruit3}.`

console.log(recipe)

// Indexing and length

let simpleWord = "supercalifraligistic"
//                |||||
//                01234

console.log(simpleWord[ simpleWord.length - 1 ])

console.log(simpleWord.length)


// Strings methods

console.log( simpleWord.indexOf("e") ) // 1
console.log( simpleWord.indexOf("o") ) // 4
console.log( simpleWord.indexOf("l") ) // 2
console.log( simpleWord.indexOf("x") ) // -1 It does not exist

console.log( simpleWord.includes("h") )

console.log( simpleWord.toUpperCase() )

console.log( simpleWord.slice(5, 9) )
console.log( simpleWord.slice(2) )
console.log( simpleWord.slice(-4) )

// Numbers

let num1 = 6;
let num2 = 2;

console.log(num1 + num2) // 8
console.log(num1 - num2) // 4
console.log(num1 * num2) // 12
console.log(num1 / num2) // 3
console.log(num1 ** num2) // 36

console.log(num1 % num2) // 0? => 2 + 2 + 2 = 6 => 0
console.log(17 % 4) // 4 + 4 + 4 + 4 => 16 => 1

console.log(2874628374 % 2) // 0 => even
console.log(2874612312667 % 2) // 1 => odd


// Math Assignments

let myAge = 39;

myAge = myAge + 1
console.log(myAge)

myAge += 1
console.log(myAge)

myAge++
console.log(myAge)


// coercion => JS will force data types to change when needed

console.log(3 + 8) // 11

console.log("3" + "8") // "38"

let results = "8" - "3" // 5
console.log(results, typeof results)

console.log("javascript" - "script") // NaN => Not a Number

console.log(8 + "3") // 83

// Number and Math methods

console.log( Math.random() ) // 0 - 0.999999

console.log(Math.max( 10, 20, 30, 10, 11, 2 ))

console.log(Math.round( 3.7 ) ) // rounds to the closest integer
console.log(Math.floor( 4.99999 ) ) // always to the lowest integer
console.log(Math.ceil( 3.000000000001 ) ) // always to the highest integer

// Booleans

let someBoolean = false

// not operator (!)

console.log(someBoolean)
console.log(!someBoolean)

let food1 = "pizza"
let food2 = "burger"
let food3 = "pizza"


console.log(food1 === food2) // false
console.log(food1 === food3) // true
console.log(food1 !== food2) // true

console.log(40 > 20)
console.log(10 >= 10)

console.log("a" > "t") // false // 97 > 116

console.log("a".charCodeAt(0))



// strict equality vs simple equality

console.log("5" === "5") // true
console.log("5" === 5) // false (first, check the data type)

console.log("5" == 5) // true


// logical operators

console.log("apple" === "pear" && "banana" === "banana") // false
//                  false      &&     true

// is true only if both are true
// is false if at least one is false


console.log("apple" === "pear" || "banana" === "banana") // true
//                  false      &&     true

// is false only if both are false
// is true if at least one is true

console.log("***** ACTIVITY ******")

// Guess the console input for each console.log

// Part 1.

console.log(true && false && true); // false
console.log((11 % 3) === 2); // true
console.log(false || !false); // true
console.log(false || (false && true)); // false
console.log(17 == '17');  // true
console.log((100 + 23) === '123'); // false
console.log('Hello' - 'llo'); // NaN

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) // -1

let subStatement = statement.slice(7);
console.log(subStatement);

console.log(subStatement[0].toUpperCase())

subStatement.toUpperCase();
console.log(subStatement); 

// JAVASCRIPT!
// javaScript!
// error


// Conditionals


let oranges = undefined;

if (oranges === 0) {
  console.log("You are out of oranges")
} else if (oranges > 0 && oranges < 4) {
  console.log("You have some oranges to make a juice")
} else if (oranges >= 4) {
  console.log("You have a lot of oranges. You can make juice for everyone")
} else {
  // only print if none of the above were true
  console.log("I don't know what you mean :(")
}



// if (30 === 30) {
//   console.log("Will this print?")
// }

if (false || undefined || null || 0 || "" || NaN) {
  console.log("Will this print?")
}


let username = "Bob"

if (username) {
  console.log(`Welcome ${username}`)
} else {
  console.log("Welcome Stranger, please identify yourself")
}



// For Loop


/* 

for ( control variable creation; condition; final expression ) {

}

*/

for (let i = 50; i < 100; i += 5) {

  // let control = 0 // ONLY ONCE

  // if (control < 10) continue the loop

  console.log(i, "chop some onions")

  // control = control + 1 // and then start again

}


// looping through a string


let someString = "B?!*??!n!!*!n?!*?!? !w1!w??!k!o???o!! 1!!???o";

// decode the password and create a new string 

// - change all * to a
// - remove all ? and !
// - remove all characters after first " "

let newString = ""

for (let i = 0; i < someString.length; i++) {
  console.log(i)
  console.log(someString[i])

  let characterToAnalize = someString[i]

  if (characterToAnalize === "*") {
    characterToAnalize = "a"
  } else if (characterToAnalize === "?" || characterToAnalize === "!") {
    // characterToAnalize = ""
    continue // skip this iteration and move to the next one.
  } else if (characterToAnalize === " ") {
    break
  }

  newString += characterToAnalize

}

console.log(newString)




