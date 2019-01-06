var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0
var losses = 0
var guessesLeft = 9
var guessesUsed = []

document.onkeyup = function(event) {
    var guessed = event.key;
    var answer = letters[Math.floor(Math.random() * letters.length)];
    //if guessed = answer, then number of wins goes up by one
    if (guessed === answer){
        console.log("correct")
    } 
    else {
        console.log("incorrect")
    }
    //else number of losses goes up by one, guesses left goes down by one, and letter appears in guesses used.




}