(function (){


    var userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));

    while (userNumber % 2 === 0 || (50 < userNumber) || (userNumber < 1 ) ) {
        alert("That is not an odd number between 1 and 50!")
        userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));
    }

    /* not sure how i could refactor this to include a break statement */

    // while (true) {
    //     var userNumber = parseInt(prompt("Please enter an odd number between 1 and 50")); // this is how hehe
    //      if (userNumber % 2 !== 0 && 50 > userNumber > 1){
    //      break;
    //      }
    // }

    alert('Number to skip is: ' + userNumber);

    for(var num = 1; num <= 50; num++) {
        if (num % 2 === 0) {
            continue;
        } else if (num == userNumber){
            console.log('Yikes! Skipping number: ' + num);
            continue;
        }
            console.log('Here is an odd number: ' + num);
    }

    console.log('is this working');
})();