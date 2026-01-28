// **Modern way**
// const sounds = {
//   w: "/Drum Kit Starting Files/sounds/crash.mp3",
//   a: "/Drum Kit Starting Files/sounds/kick-bass.mp3",
//   s: "/Drum Kit Starting Files/sounds/snare.mp3",
//   d: "/Drum Kit Starting Files/sounds/tom-1.mp3",
//   j: "/Drum Kit Starting Files/sounds/tom-2.mp3",
//   k: "/Drum Kit Starting Files/sounds/tom-3.mp3",
//   l: "/Drum Kit Starting Files/sounds/tom-4.mp3",
// };
// document.querySelectorAll(".drum").forEach((button) => {
//   button.addEventListener("click", () => {
//     const sound = sounds[this.innerHTML];
//     if (sound) new Audio(sound).play();
//   });
// });

document.addEventListener("keydown", function (e) {
  var keyPressed = e.key;
  console.log(keyPressed);
  buttonAnimation(keyPressed);
  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
  }
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    activeButton.classList.remove("pressed");
  }
}
