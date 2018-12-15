
// A random number between 1 and 10 will determine which player starts the game.
// A message is then displayed indicating which player goes first.
// A value (either X or O) is assigned to a global variable called "player".
function randomizeStartingPlayer(){
  var number = Math.floor(Math.random() * 10) + 1;
  if (number % 2 === 0) {
    player = "X";
    message("Player " + player + " goes first");
  }else {
    player = "O";
    message("Player " + player + " goes first");
    }
  }

//This function will check to see is a player has already moved into the given cell.
// if the cell is empty, the player (X or O) will populate the cell and the message will update.
// If the cell is occupied, the cell will not update and a message will say it's occupied.
function checkOccupiedCell(id){
  if (document.getElementById(id).innerHTML === "") {
    userDidMove(id);
    currentPlayer();
    message("It's " + player + "'s turn");
  }else {
    message("That cell is occupied. It is still " + player + "'s turn.");
  }
  }

// The currentPlayer() function checks the global variable "player" value.
// If the player's value is "X", the function changes it's value to "O" and vice-versa.
// This function then updates the message with whose turn it is.
function currentPlayer(){
  if (player === "X"){
    player = "O";
  } else{
    player = "X";
  }
}

// This is the function that directly handles the message update.
function message(message){
  document.getElementById("message").innerHTML = message;
}

// this function updates the player mark inside each cell
function userDidMove(id) {
  document.getElementById(id).innerHTML = player;
}

// The resetGame function resets the values that were placed by the
// message() and userDidMove() functions.
function resetGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  randomizeStartingPlayer();
}