var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

// 1. initiates game
$(document).on("keydown", function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  } else {
    return;
  }
});

// 2. changes level + generates random color + stores sequence of colors
function nextSequence() {
  level++;
  changeLevels(level);
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  var randomChosenColour = gamePattern.at(-1);
  buttonAnimation(randomChosenColour);
  playSound(randomChosenColour);
  console.log(gamePattern);
}

// 3. user clicks + userClickedPattern is checked against gamePattern
$("div.btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animateClick(userChosenColour);
  playSound(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern);
}); //TODO currently, checkAnswer is called on every click,change to check only once user has finished clicking

function checkAnswer(currentLevel) {
  var i = currentLevel.length - 1;
  if (currentLevel[i] === gamePattern[i]) {
    console.log("success");
    if (currentLevel.length === gamePattern.length) {
      //check only when user has finished clicking
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
  }
}

function changeLevels(level) {
  $("h1").text("Level " + level);
}

function playSound(randomColor) {
  const sound = new Audio("sounds/" + randomColor + ".mp3");
  sound.play();
}

function buttonAnimation(randomColor) {
  $("div#" + randomColor).addClass("hidden");
  setTimeout(() => {
    $("div#" + randomColor).removeClass("hidden");
  }, 100);
}

function animateClick(currentColour) {
  $("div#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("div#" + currentColour).removeClass("pressed");
  }, 100);
}
// when user clicks, check the index of answer to gameSequence
