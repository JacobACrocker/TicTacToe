function randomizePlayer(){
  var number = Math.floor(Math.random() * 10) +1;
  if (number % 2 === 0) {
    document.getElementById("message").innerHTML = "Player X goes first";
    console.log(number + " is even");
  }else {
   document.getElementById("message").innerHTML = "Player O goes first";
   console.log(number + " is odd");
  }
}

function userMove(id) {
  document.getElementById(id).innerHTML = "X";
}


function resetGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  randomizePlayer();
}