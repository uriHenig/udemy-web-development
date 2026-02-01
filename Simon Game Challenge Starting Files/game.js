var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  //   console.log(gamePattern.at(-1));
  var randomChosenColour = gamePattern.at(-1);
  //   console.log(randomChosenColour);
  buttonAnimation(randomChosenColour);
  playSound(randomChosenColour);
}

function buttonAnimation(randomColor) {
  $("div#" + randomColor).addClass("hidden");
  setTimeout(() => {
    $("div#" + randomColor).removeClass("hidden");
  }, 100);
}
function playSound(randomColor) {
  const sound = new Audio("sounds/" + randomColor + ".mp3");
  sound.play();
}

// hide
// unhide with timeout
