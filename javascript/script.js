// lesson 107
var output = [];
var count = 1;

function fizzBuzz(params) {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzPop");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("pop");
  } else {
    output.push(count);
  }

  count++;

  console.log(output);
}
fizzBuzz();

// who's buying lunch challenge
var list = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(arr) {
  var listLength = list.length;
  var calc = list[Math.floor(Math.random() * listLength)];
  return calc + " is going to buy lunch today!";
}
whosPaying();

// lesson 108
var i = 99;

while (i > 0) {
  if (i === 1) {
    console.log(
      i +
        " bottle of beer on the wall, " +
        i +
        " bottle of beer, Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  } else {
    console.log(
      i +
        " bottles of beer on the wall, " +
        i +
        " bottles of beer, Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall."
    );
  }
  i--;
}

if (i === 0) {
  console.log(
    "No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}

// fibonacci furmula
function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    for (var i = 2; i < n; i++) {
      output = [0, 1];
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
fibonacciGenerator(5);
