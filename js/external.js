console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Cool, " + favoriteColor.trim() + " is my favorite color ");

// Exercise 3.1
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?
var littleMermaid = prompt("How many days would you like to rent The Little Mermaid for?");
var brotherBear = prompt("How many days would you like to rent Brother Bear for?");
var herculesMovie = prompt("How many days would you like to rent Hercules for?");
var rentalRate = prompt("Uhh, how much was the day rate on these movies again?");

alert("Our current rental rate is "+ rentalRate + " dollars. Your total for today will be " +((Number (littleMermaid)+ Number(brotherBear)+ Number(herculesMovie)) * Number(rentalRate) ) + " dollars!");

//Exercise 3.2
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = prompt("What's your hourly rate at Google?");
var googleHours = prompt("How many hours did you work there?");
var facebookRate = prompt("What's your hourly rate at Facebook?");
var facebookHours = prompt("How many hours did you work there?");
var amazonRate = prompt("What's your hourly rate at Amazon?");
var amazonHours = prompt("How many hours did you work there?");
var weeklyPay = (Number(googleRate)*Number(googleHours)) + (Number(facebookRate)*Number(facebookHours)) + (Number(amazonRate)*Number(amazonHours));

alert("Nice! You made " + weeklyPay + " dollars this week!");

// //Exercise 3.3
// // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var noConflicts = confirm("Hey are you free during this class period?");
var fullClass = confirm("Is the class you're trying to get into full?");

if (noConflicts == true && fullClass == false ) {
    alert("Nice! Looks like i can enroll you into this class!");
} else {
    alert("Tough luck! Better luck enrollng next time, buddy!");
}

//Exercise 3.4
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

var shoppingCart = prompt("How many items do you have in your cart?");
var offerExpired = confirm("Has your coupon code expired?");
var premiumMember = confirm("Are you a premium member at this fine establishment?");

if (Number(shoppingCart)>2 || premiumMember == true && offerExpired == false) {
    alert("Nice, looks like we can apply that product offer!");
} else {
    alert("No offers for you, nerd!");
}