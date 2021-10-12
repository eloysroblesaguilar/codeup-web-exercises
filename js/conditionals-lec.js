// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//      this code will run if our condition is true;
// }

/** Consider the sentence : ' When I run out of milk: I go to the store to get more.' */
//Condition : When I run out of milk
//Action: I go to the store to get more.

// if(milk == 0) {
//     goToStore();
// }

/** I want to make a block of code that logs a message to the console when a variable is set to the number 5. */

var five = 5;

if (five === 5) {
    console.log("Hey, that's five.");
}

/** Building a function that returns a string when I pass a number as an argument */

function isItANumber(parameter) {
    var str = "Oi, that ain't a number"
    if (typeof parameter === 'number') {
        str = "Hey. That's a number."
    }
    return str
}

console.log(isItANumber(72));
console.log(isItANumber('Doug'));

// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//      I run when the condition evaluates to true;
// } else {
//      otherwise I run;
// }

/** Consider the following sentence: If i owned one, I'd get milk from my cow when i ran out, But since I don't
 * I'll go to the store instead.*/

// if (hasCow) {
//     console.log('Goin to milk Bessie.');
// } else {
//     console.log('Going to H-E-B.');
// }

/** Expanding on our previous function to include an else statement. */

function isItANumber(parameter) {
    if (typeof parameter === 'number') {
        return "Hey. That's a number.";
    } else {
        return "Hey, you're not a number!";
    }
}
