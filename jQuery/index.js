// $(document).ready(function () {
//   $("h1").css("color", "red");
//   //   document.querySelector("h1").style.color = "red";
// });

$("h1").addClass("big-title", "margin");

$("h1").text("bye");

$("button").eq(1).html("<em>hi</em>");

$("a").attr("href", "https://www.yahoo.com");

$("button").click(function () {
  $("a").text("changed");
});

$(document).on("keydown", function (event) {
  $("h1").text(event.key);
});
