var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  var randomChosenColour = gamePattern.at(-1);
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

// store color user clicks in variable
$("div.btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
});
