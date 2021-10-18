(function (){

function showMultiplicationTable (x) {
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(x + ' x ' + multiplier + ' = ' + (x*multiplier));
    }
}

console.log(showMultiplicationTable(7));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function evenOrOddNumbers () {
    for (var numberTime = 0; numberTime < 10; numberTime++) {
        var num = getRandomInt(20, 200)
        if (num % 2 === 0) {
            console.log(num + " is even.");
        } else {
            console.log(num + " is odd.");
        }
    }
}

console.log(evenOrOddNumbers());

var numberMultiplier = 0;
for (var number = '1'; number.length < 10; number +='1') {
    numberMultiplier++;
    console.log(number * numberMultiplier);
}


for (var hundo = 100; hundo >= 5; hundo -= 5){
    console.log(hundo);
}


})();
