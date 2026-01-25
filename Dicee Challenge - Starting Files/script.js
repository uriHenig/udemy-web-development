var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.getElementById("img1").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.getElementById("img2").setAttribute("src", randomDiceImage2);

// select h1
var banner = "";

// create if conditions for winner or draw
if (randomNumber1 > randomNumber2) {
  banner += "🏆Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  banner += "Player 2 Wins!🏆";
} else {
  banner += "Draw!";
}
// inject text to html
document.querySelector("h1").textContent = banner;
