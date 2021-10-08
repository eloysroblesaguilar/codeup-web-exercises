"use strict";

var jeff = 'Jeff';
console.log(jeff);

console.log("Hello! I'm in my own file!");

var returnOfAlert = alert("TGIF! Thank Goodness I'm Fred!");
console.log(returnOfAlert);

var returnOfConfirm = confirm("Got any plans for this three day weekend?");
console.log(returnOfConfirm);

var favoriteNuMetalBand = prompt("What's your favorite nu-metal band?");
console.log("Ha ha, you like " + favoriteNuMetalBand + "!");

var bothSocksFirst = confirm("Hey , do you put on both socks before putting you shoes on?");
if (bothSocksFirst) {
    alert("Yeah, thats's right.");
} else {
    prompt("Why?");
    alert("Weirdo.....");
}

var leastFavoriteSoda = prompt("What is your least favorite soda?");
var favoriteSoda = prompt("What is your favorite soda?");

alert("Hello fellow teens! My name is " + leastFavoriteSoda+ " " + favoriteSoda + " and I choose hugs, not drugs.");