document.onkeyup = function(event) {
  userGuess = event.key;

if (userGuess == computerGuess) {
 userGuess = "";
}
else if(userGuess !== computerGuess) {
turns--;
}

if (turns > 0) {
  guessedSoFar.push(userGuess);
}

if (turns ==0) {
   losses++;
   alert("Sorry, you lost. The correct letter word was: " + randPrez + ". Click OK to play again.");
}
}
