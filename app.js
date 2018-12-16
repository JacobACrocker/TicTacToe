
// A random number between 1 and 10 will determine which player starts the game.
// A message is then displayed indicating which player goes first.
// A value (either X or O) is assigned to a global variable called "player".
function randomizeStartingPlayer(){
  var number = Math.floor(Math.random() * 10) + 1;
  gameWinner = null;
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
  if (gameWinner != null){
    message(player + " has won! Reset the game.");
  }else if (document.getElementById(id).innerHTML == "") {
    userDidMove(id);    
    currentPlayer();
  }else if (tieCheck()){
    message("Draw! Reset the game.");
  }else{
    message("That cell is occupied. It is still " + player + "'s turn.");
  }
}

// The currentPlayer() function checks the global variable "player" value.
// If the player's value is "X", the function changes it's value to "O" and vice-versa.
// This function then updates the message with whose turn it is.
function currentPlayer(){
  if (winCheck(player)){
      gameWinner = player;
      console.log(player + " wins!");
  }else if (tieCheck()){
    console.log("tie");
  }else if (player == "X"){
    player = "O";    
    message("It's " + player + "'s turn");
  } else{
    player = "X";    
    message("It's " + player + "'s turn");
  }
}

// This is the function that directly handles the message update.
function message(message){
  document.getElementById("message").innerHTML = message;
}

// this function updates the player mark inside each cell
function userDidMove(id) {
  if (winCheck(player)){
    //console.log("userDidMove() ran. id = " + id + ". player = "+ player);
    document.getElementById(id).innerHTML = player;
  }else{
  console.log("userDidMove() ran. id = " + id + ". player = "+ player);
  document.getElementById(id).innerHTML = player;
  }
}

function checkSet(cell1, cell2, cell3, winner){
  //console.log("checkSet() ran. cell1 = " + cell1 + ", cell2 = " + cell2 + ", cell3 = " + cell3);
    var result = false;
  if (getCell(cell1) == winner && getCell(cell2) == winner && getCell(cell3) == winner){
    result = true;
    //console.log("checkSet() is returning " + result);
    return result;
  }else {
    //console.log("checkSet() ran. " + cell1 + ", " + cell2 + ", " + cell3 + ", & " + winner + " were passed in.");
    return result;
  }
}

function getCell(id) {
  //console.log("getCell() ran. id = " + id + ". contents are " + document.getElementById(id).innerHTML + ".")
  return document.getElementById(id).innerHTML;
  }

function winCheck(winner){
  var win = false;  
  //console.log("winCheck() ran. " + winner + " = winner. win = " + win);
  if (// Row 1
      checkSet("1", "2", "3", winner) || 
      // Row 2
      checkSet("4", "5", "6", winner) ||
      // Row 3
      checkSet("7", "8", "9", winner) ||
      // Column 1
      checkSet("1", "4", "7", winner) ||
      // Column 2
      checkSet("2", "5", "8", winner) ||
      // Column 3
      checkSet("3", "6", "9", winner) ||
      // Diagnal left to right
      checkSet("1", "5", "9", winner) ||
      // Diagnal right to left
      checkSet("3", "5", "7", winner) 
     ){

      win = true;
      //console.log("winCheck() ran. win is " + win + ".");
      message(player + " wins!");
      return win;
  }else {
      //console.log("winCheck() ran. " + player + " win is " + win + ".")
      return win;
  }
}

function tieCheck(){
  var tie = false;
  if (boardIsFull()){
    message("Draw! Reset the game.");
    tie = true;
    return tie;
  }else{
    console.log("No draw");
    return tie;
  }
}

function boardIsFull(){
  var full = false;
  if (
    getCell("1") != "" &&
    getCell("2") != "" &&
    getCell("3") != "" &&
    getCell("4") != "" &&
    getCell("5") != "" &&
    getCell("6") != "" &&
    getCell("7") != "" &&
    getCell("8") != "" &&
    getCell("9") != "" 
  ){
    full = true;
    return full;
  }else{
    return full;
  }
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