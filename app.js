
//A random number between 1 and 10 will determine which player starts the game.
//A message is then displayed indicating which player goes first.
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

function currentPlayer(){
  if (player === "X"){
    player = "O";
  } else{
    player = "X";
  }
}

function message(message){
  document.getElementById("message").innerHTML = message;
}

function userDidMove(id) {
  document.getElementById(id).innerHTML = player;
}


function resetGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  randomizeStartingPlayer();
}