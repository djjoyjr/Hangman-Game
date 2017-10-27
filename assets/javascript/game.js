var wins = 0;
var losses = 0;
var turns = 12;
var userGuess = "";
var presidents = ["washington", "adams", "jefferson", "madison", "monroe", "adams", "jackson", "vanburen", "harrison", "tyler", "polk", "taylor", "fillmore", "pierce", "buchanan", "lincoln", "johnson", "grant", "hayes", "garfield", "arthur", "cleveland", "mckinley", "roosevelt", "taft", "wilson", "harding", "coolidge", "hoover", "truman", "eisenhower", "kennedy", "nixon", "ford", "carter", "reagan", "bush", "clinton", "obama", "trump"];
var randPrez = presidents[Math.floor(Math.random()*presidents.length)];
var guessedSoFar = [];
var blanks = [];
var board = [];
var goodGuess = false;
var stats = "";
var win = false;

function newGame () {
  blanks = [];
  board = [];
  guessedSoFar = [];
  unique = [];
  turns = 12;
  randPrez = presidents[Math.floor(Math.random()*presidents.length)];
  for (var i = 0; i < randPrez.length; i++) {
    blanks[i] = "__";
  }

board =
  "<h2>" + blanks.join("  ") + "</h2>";
  document.querySelector("#game-board").innerHTML = board;
  var randPrezArr = Array.from(randPrez);

  //Accept user keyboard input
  document.onkeyup = function(event) {
    userGuess = event.key;
    guessedSoFar.push(userGuess);

//Loop to check guessed letter against array.
for (var i = 0; i < randPrezArr.length; i++) {
  if (userGuess == randPrezArr[i]) {
    blanks [i] = userGuess;
    goodGuess = true;
  }
}
if (goodGuess == true) {
  goodGuess = false;
}
else {
  turns --;
}

//Filters arrays so that they only contain unique values
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
var prezFilter = randPrezArr.filter(onlyUnique);
var blankFilter = blanks.filter(onlyUnique);

if (blankFilter.length==prezFilter.length) {
  for (var i = 0; i < (prezFilter.length); i++) {
  win = blankFilter.includes(prezFilter[i]);
  }
}

if (win) {
  alert("Correct! The president was " + randPrez);
  wins++;
  win = false;
  newGame();
}

if (turns == 0){
  alert("Sorry, you lost. Try again.");
  losses ++;
  newGame ();
}

stats =
  "<h3>Wins: " + wins + "</h3>" +
  "<h3>Losses: " + losses + "</h3>" +
  "<h3>Guesses remaining: " + turns + "</h3>" +
  "<h3>Letters guessed so far: " + guessedSoFar + "</h3>";
  document.querySelector("#stat-box").innerHTML = stats;

board =
"<h2>" + blanks.join("  ") + "</h2>";
document.querySelector("#game-board").innerHTML = board;
  }
}
