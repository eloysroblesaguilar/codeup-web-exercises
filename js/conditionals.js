"use strict";

/* ########################################################################## */
(function(){
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (color) {
    if (color == 'red') {
        return ("red is the color of cherries");
    } else if (color == 'orange') {
        return ("orange is my favorite color");
    } else if (color == 'yellow') {
        return ("yellow is the color of bananas");
    } else if (color == 'green') {
        return ("green is the color of plantains");
    } else if (color == 'blue') {
        return ("blue is the color of the ocean");
    } else if (color == 'indigo') {
        return ("my favorite pair of denim is indigo");
    } else if (color == 'violet') {
        return ("violet! like the flower!");
    } else {
        return ("i dont know anything about that color...");
    }
}

// console.log(analyzeColor('red'));
// console.log(analyzeColor('orange'));
// console.log(analyzeColor('yellow'));
// console.log(analyzeColor('green'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('indigo'));
// console.log(analyzeColor('violet'));
// console.log(analyzeColor('cyan'));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

    console.log(analyzeColor(randomColor));

    /**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var color = prompt("What's your favorite color?").toLowerCase();


switch (color) {
    case 'red':
        alert('red is the color of cherries');
        break;
    case 'orange':
        alert('orange is my favorite color too.');
        break;
    case 'yellow':
        alert('yellow is the color of bananas');
        break;
    case 'green':
        alert('green is the color of plantains');
        break;
    case 'blue':
        alert('blue is the color of the ocean');
        break;
    case 'indigo':
        alert('my favorite pair of denim is the color indigo');
        break;
    case 'violet':
        alert('violet! like the flower!');
        break;
    default:
        alert('I don\'t know anything about that color... awkward.. ');
        break;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



/* ########################################################################## */

    /**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNumber = Math.floor(Math.random() * 6);

var percentage;

if(luckyNumber === 0) {
    percentage = 0;
} else if (luckyNumber === 1) {
    percentage = .1;
} else if (luckyNumber === 2) {
    percentage = .25;
} else if (luckyNumber === 3) {
    percentage = .35;
} else if (luckyNumber === 4) {
    percentage = .5;
} else if (luckyNumber === 5) {
    percentage = 1;
}
console.log(percentage);

function calculateTotal(percentage, total) {
    return total - (percentage * total);
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var totalBill = prompt("What was your total bill today?");
var discountBill = calculateTotal(percentage,totalBill);
alert("Your lucky number was " + luckyNumber + "!");
if (luckyNumber === 0 ){
    alert("Looks like you dont get any discount on your bill today... sorry.. I guess..");
} else {
    alert("Your price before discount is $" + totalBill + " dollars. Your price after discount is $" + discountBill + " dollars!")
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var wouldLike = confirm("Would you like to enter a number?");
if (wouldLike === true) {
    var magicNumber = parseInt(prompt("Enter your number!"));
}
console.log(magicNumber);
console.log(typeof magicNumber == 'number');

/** second failed solution ;-;  **/
    if (isNaN(magicNumber) === false) {
        if (magicNumber % 2 == 0) {
            alert("Your number is even!");
        } else {
            alert("Your number is odd!");
        }

        alert("Your number plus 100 is " + (magicNumber + 100) + "!");

        if (magicNumber > 0) {
            alert("Your number is positive!");
        } else {
            alert("Your number is negative!");
        }
    } else {
        alert("That's not a number bozo!");
    }

})();