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
  buttonAnimation("div#", randomChosenColour, "hidden");
  playSound(randomChosenColour);
  console.log(gamePattern);
}

// 3. user clicks + userClickedPattern is checked against gamePattern
$("div.btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  buttonAnimation("div#", userChosenColour, "pressed");
  playSound(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern);
}); //TODO currently, checkAnswer is called on every click,change to check only once user has finished clicking

function checkAnswer(currentLevel) {
  var i = currentLevel.length - 1;
  if (currentLevel[i] === gamePattern[i]) {
    if (currentLevel.length === gamePattern.length) {
      //check only when user has finished clicking
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function changeLevels(level) {
  $("h1").text("Level " + level);
}

function playSound(randomColor) {
  const sound = new Audio("sounds/" + randomColor + ".mp3");
  sound.play();
}

function buttonAnimation(selector, randomColor, styleName) {
  $(selector + randomColor).addClass(styleName);
  setTimeout(() => {
    $(selector + randomColor).removeClass(styleName);
  }, 100);
}

function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);
}
