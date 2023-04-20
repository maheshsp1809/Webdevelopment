// Step 3
var buttonColours = ["red", "blue", "green", "yellow"];

// Step 2 and Step 4
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // Step 6
  gamePattern.push(randomChosenColour);

  // Step 1 and 2
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// Step 5
var gamePattern = [];

// Call nextSequence to generate the first random colour in the game pattern
nextSequence();
