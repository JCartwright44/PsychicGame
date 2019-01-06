var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 1
var losses = 1
var guessesLeft = 8
var guessesUsed = []

document.onkeypress = function(event) {
    var guessed = event.key;
    var answer = letters[Math.floor(Math.random() * (letters.length - 1))];
    //if guessed = answer, then number of wins goes up by one
    //else number of losses goes up by one, guesses left goes down by one, and letter appears in guesses used.
    if (guessed === answer){
        console.log("correct")
        var newWins = (wins++);
        document.getElementById("wins").innerHTML = "Wins: " + newWins;
        guessesLeft = 9;
        guessesUsed = [];
    } 
    // else{
    //     console.log("incorrect")
    //     var newGuessesLeft = (guessesLeft--);
    //     document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + newGuessesLeft;
    //     guessesUsed.push(event.key);
    //     document.getElementById("guessesUsed").innerHTML = "Your Guesses so far: " + guessesUsed;
    //     // end counting down at zero, add one to losses, clear guesses used array, reset guesses left
    if (guessed != answer){
        console.log("Incorrect")
        var newGuessesLeft = (guessesLeft--);
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + newGuessesLeft;
        guessesUsed.push(event.key);
        document.getElementById("guessesUsed").innerHTML = "Your Guesses so far: " + guessesUsed;
    }
    if (newGuessesLeft === 0) {
        console.log("Loss")
        var newLosses = (losses++); 
        document.getElementById("losses"). innerHTML = "Losses: " + newLosses;
        guessesLeft = 9;
        guessesUsed = [];
    }
    }
