'use strict';

// declare global variables
// create event listeners
// propose game functions
// create game functions
var iconArray = ["img/icons/icon1.jpg","img/icons/icon2.jpg","img/icons/icon3.jpg","img/icons/icon4.jpg"];
// var randomSquare = [];
// var i = 0;
// var data-tile = [];

$('.start').click(function(event) {
    startGame();
})
// $('.tile').click(function(event) {
    // $(this).toggleClass('active');
    // var tileClicked = $(this).attr("data-tile");
    // iconArray.attr("data-tile");
    // console.log("you clicked number " + tileClicked);
// });
// $('.reset').click(function(event) {

// });

function startGame() {
    var i = 5;
    var intervalId = setInterval(function() {
        // var randomNumber = getRandomSquare();
        // console.log(randomNumber);
        animateRandomIcon(getRandomSquare());
        // debugger;
        $('.timer').text(i);
        i -= 1;
        if(i <= 0) {
            clearInterval(intervalId);
            $('.timer').text("Time Up");
        }
    }, 3000);
}

function getRandomSquare() {
    var randomNumber = Math.floor((Math.random() * 9) + 1);
    return randomNumber;
}

function getRandomIcon() {
    var randomIcon = Math.floor(Math.random() * 4);
    return randomIcon;
}

function animateRandomIcon(tile){
    var square = $('[data-tile="' + tile + '"]');
    console.log(square);
    var rand = getRandomIcon();
    var icon = iconArray[rand];
    square.parent().css("background-image", "url(" + icon + ")");
    square.hide();
    setTimeout(function() {
        square.show();
    },2000);
    // Randoming generate one of four icons and place in random square.
}
// for(i = 0; i < 4; i++) {

    // console.log("Game Over")
// }
// function countHits(){
//     // Count how many hits a player gets
// }
// function countMisses() {
//     // Count how many times a player misses before game over
// }
// function shuffleTiles() {
//     getRandomSquare();
//     startGame();
//     // if $('.start').text('Hits: ' + iconArray.length)//player continues to hit icons then add to the count.

//     // if // player misses an icon then display Game Over.
// }
// function gameRestart() {
//     // Restarts the game
// }
// function gameOver() {
//     iconArray =[];
//     alert('You lost Sucker!');
//     location.reload();
// }
// function timer() {
    //
// }
