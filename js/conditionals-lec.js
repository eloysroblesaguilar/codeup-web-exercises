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
// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat,
 * I could get my milk from it, but since I don't own either of those: I'll go to the store instead." */

// How would we write this as a if/else if/else code block?

// var hasCow = false;
// var hasGoat = false;
//
// if (hasCow) {
//     console.log('Milking Bessie');
// } else if (hasGoat) {
//     console.log('Milking Gertrude');
// } else {
//     console.log('Going to H-E-B');
// }


/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter > 35) {
        return 'I am greater than 35';
    } else if (parameter < 35) {
        return 'I am less than 35';
    } else {
        return 'I am 35';
    }
}

console.log(isThisThirtyFive(40));
console.log(isThisThirtyFive(30));
console.log(isThisThirtyFive(35));


// TERNARY EXPRESSION: An expression to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Expression was true." : "Expression was false.";

/** Consider the following statement: "Are we out of milk? If we are out of milk: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

var doWeHaveMilk = true;

var action = (doWeHaveMilk) ? "I am going to make a bowl of cereal" : "I am heading out to the store";

console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */

function isItANumber(parameter) {
    return (typeof parameter === 'number') ? "Hey. That's a number." : "Oi, that ain't a number"
}

console.log(isItANumber('poop'));
console.log(isItANumber(36));

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "grey":
//     case "gray":
//         alert("is it grey, or gray?")
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

var animal = "skink";
switch (animal) {
    case 'cow':
        console.log('milking bessie');
        break;
    case 'goat':
        console.log('milking gertrude');
        break;
    case 'camel':
        console.log('milking camille');
        break;
    default:
        console.log('headed to the store');
        break;
}

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat.
 * If they like 'olive loaf' we should return an alert to congratulate them on their bold choice,
 * and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer.
 * All other responses should trigger an alert stating apathy. */

// Let's work on the exercise!

var sandwichMeat = prompt('What is your favorite sandwich meat?')
switch (sandwichMeat) {
    case 'olive loaf':
        alert('Congratulations on the bold choice....');
        break;
    case 'brisket':
        alert('Congratulations on choosing the superior sandwich meat');
        break;
    default:
        alert('Oh, I guess ' + sandwichMeat + ' is pretty good heh...');
        break;
}
