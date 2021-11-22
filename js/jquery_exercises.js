$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
    var h1 = $('h1');
    alert(h1);
    // var list = $('#list').html();
    // alert(list);
    // var listFacts = $('.listfacts').html();
    // alert(listFacts);
    // var coolQuotes = $('#coolquotes').html();
    // alert(coolQuotes);
    // var div = $('.area');
    // var codeupElements = $('.codeup')
    //
    // $('.codeup').css ({
    //     'border' : '1px solid red'
    // })
    // $('li').css({
    //     'font-size' : '20px'
    // })
    // $('li, h1, p').css({
    //     'background-color' : 'yellow',
    //     'opacity' : '.75'
    // })
h1.click(function (e){
    h1.css({
        'background-color' : 'yellow'
    })
});
var p = $('p');

p.dblclick(function (e){
    p.css({
        'font-size' : '18px'
    })
});

var li = $('li');

li.hover(
    function (){
        li.css('color','red');
    },
    function (){
        li.css('color','black')
    }
);

});