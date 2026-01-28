function anotherAddEventListener(eventType, callBack) {
  var eventThatHappened = {
    event: "keydown",
    key: "p",
    duration: 2,
  };

  if (eventThatHappened.event === eventType) {
    callBack(eventThatHappened);
  }
}
anotherAddEventListener("keydown", function anonymousFunc(e) {
  console.log(e);
});
