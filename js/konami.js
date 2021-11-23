// $(document).keyup(function (event){
//     console.log(event.keyCode);
// })
// left arrow keycode 37, up arrow keycode 38, right arrow keycode 39,
// down arrow keycode 40, a keycode 65, b keycode 66, return keycode 13

var konamiCodeCounter = 0;
var regulusCodeCounter = 0;
var div = $('div');
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var regulusCode = [82, 69, 71, 85, 76, 85, 83]; //keycodes for regulus


//KONAMI CODE EVENT
$(document).keyup(function (event) {
    console.log(konamiCodeCounter);
    if (event.keyCode === konamiCode[konamiCodeCounter]) {
        konamiCodeCounter++;
        if (konamiCodeCounter === 11) {
            var audio = document.querySelector('#stageclearaudio');
            audio.play();
            div.css({
                'background-image': 'url(../img/1up.gif)'
            });
        }
    } else {
        konamiCodeCounter = 0;
    }
})
//REGULUS CODE EVENT
$(document).keyup(function (event) {
    console.log(regulusCodeCounter);
    if (event.keyCode === regulusCode[regulusCodeCounter]) {
        regulusCodeCounter++;
        if (regulusCodeCounter === 7) {
            var audio = document.querySelector('#rickrollaudio');
            audio.play();
            div.css({
                'background-image': 'url(../img/rickroll.gif)'
            })
        }
    } else {
        regulusCodeCounter = 0;
    }
})


//BUTTON DISPLAY AND RESTART FUNCTION
$(document).keyup(function (event) {
    var keyCode = event.keyCode
    switch (keyCode) {

        case 37 :
            div.css({
                'background-image': 'url(../img/joystickleft.svg)'
            })
            break;
        case 38 :
            div.css({
                'background-image': 'url(../img/joystickup.svg)'
            })
            break;
        case 39 :
            div.css({
                'background-image': 'url(../img/joystickright.svg)'
            })
            break;
        case 40 :
            div.css({
                'background-image': 'url(../img/joystickdown.svg)'
            })
            break;
        case 65 :
            div.css({
                'background-image': 'url(../img/abutton.svg)'
            })
            break;
        case 66 :
            div.css({
                'background-image': 'url(../img/bbutton.svg)'
            })
            break;
        case 32 :
            location.reload();
    }


})