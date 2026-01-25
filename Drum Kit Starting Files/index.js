function Audio(fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
    fileLocation.play();
  };
}
// var buttons = document.querySelectorAll(".drum");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     switch (this.innerHTML) {
//       case "w":
//         new Audio("/Drum Kit Starting Files/sounds/crash.mp3").play();
//         break;
//       case "a":
//         new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3").play();
//         break;
//       case "s":
//         new Audio("/Drum Kit Starting Files/sounds/snare.mp3").play();
//         break;
//       case "d":
//         new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3").play();
//         break;
//       case "j":
//         new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3").play();
//         break;
//       case "k":
//         new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3").play();
//         break;
//       case "l":
//         new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3").play();
//         break;
//       default:
//         break;
//     }
//   });
// }

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

// function takeSuitcase() {
//   alert("Hi, may I take your suitcase Ma'am?");
// }

// function BellBoy(name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//   takeSuitcase();
// }

// var bellboy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var audio = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
document.querySelectorAll(".drum")[3].addEventListener("click", console.log("first"));
// audio.play()
