var sumOfNaturalNumbers = function (number) {
  return (number + (number * number)) / 2;
};

var modulusAndSum = function (firstArg, secondArg) {
  return firstArg + (firstArg % secondArg);
};

var logicalAnd = function (firstArg, secondArg, thirdArg) {
  return firstArg < secondArg && secondArg > thirdArg;
};

var charAtHalfLength = function (string) {
  var character = string.charAt((string.length / 2) - 1);
  return "Character " + (string.length / 2) + " is: " + character;
};
