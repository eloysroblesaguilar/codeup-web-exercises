"use strict";

// A function is a block of reusable code that performs a specific task.
// Functions typically take in an input, and produce an output.

// Functions we have used so far:
// - prompt();
// - alert();
// - Number();
// - parseFloat();
// - parseInt();
// - .toFixed();
// - .toUpperCase();

// When executing a function, we all the name of the functions, following any input
// inside of the parenthesis known as arguments.

// prompt('What is your name?'); // returns a string

// Function Structure
//
// function todaysDate(parameter1, parameter2, etc.); {
//     do something
//     return something
// }

function todaysDate(greeting) {
    return greeting + Date();
}

// Execute function

var date = todaysDate('Today\'s date is: ');
console.log(date);

// Utilizing the return of a function within another function

function echo(phrase) {
    return phrase.toUpperCase() + " " + phrase + " " + phrase.toLowerCase();
}
console.log(echo(echo('Hello')));

// Anonymous function

var sayBye = function (name) {
    return 'Goodbye ' + name;
}

console.log(sayBye('Eloys'));

// Example:

// Create a function which takes in two number parameters to find the Hypotenuse angle.

//Parameters are the placeholder values stated in the function definition
//Arguments are the we input values declared when the function is executed.
function findHypotenuse(a, b) {
    var result;
    result = Math.sqrt((a * a ) + (b * b))
    return result;
}

// Have a triangle with the sides of 4 and 5.
// Execute function to find hypotenuse

console.log(findHypotenuse(4,5));
console.log(findHypotenuse(5,5));
console.log(findHypotenuse(14,5));
console.log(findHypotenuse(4,9));
console.log(findHypotenuse(4,1));

function printFour () {
    return console.log('four');
}

printFour();
printFour();
printFour();

// - FUNCTION SCOPE -

// Scope is a term to describe where a variable can be accessed.

//With my global variable tht exists in the HTML document, I can conosle.log it's value.
console.log(global);

function  greeting() {
    var firstName = 'John';
    var lastName = 'Doe';
    return ('Hello, ' + firstName + ' ' + lastName);
}

console.log(greeting());
console.log((firstName + ' ' + lastName));

// Immediately Invoked Function Expression (IIFE)

(function() {
    var ifyVar = 'I am local to the IFFE'
})();

