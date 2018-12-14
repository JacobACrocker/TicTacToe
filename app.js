function userMove(id) {
  document.getElementById(id).innerHTML = "X";
}


function resetGame() {
  var squares = document.getElementsByClassName("square");
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
}