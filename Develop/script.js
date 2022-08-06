// arrays of valid characters
var lowerChar = [];
var upperChar = [];
var specialChar = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getLengthChoice() {
  var lengthChoice = parseInt(
    prompt(
      "How many characters do you want your password to be?" +
        "\n" +
        "Password must be at least 8 characters and no more than 128 characters."
    )
  );
  if (Number.isNaN(lengthChoice)) {
    alert("Password length must be a number.");
  } else if (lengthChoice < 8) {
    alert("Password must be at least 8 characters.");
  } else if (lengthChoice > 128) {
    alert("Password must be no more than 128 characters.");
  } else getLowerChoice();
}

function getLowerChoice() {
  var lowerChoice = confirm(
    "Do you want your password to include lowercase characters?"
  );
  if (lowerChoice === true || lowerChoice === false) {
    getUpperChoice();
  }
}

function getUpperChoice() {
  var upperChoice = confirm(
    "Do you want your password to include uppercase characters?"
  );
  if (upperChoice === true || upperChoice === false) {
    getSpecialChoice();
  }
}

function getSpecialChoice() {
  var specialChoice = confirm(
    "Do you want your password to include special characters?"
  );
  if (specialChoice === true || specialChoice === false) {
    console.log("what's up");
  }
}

getLengthChoice();

//
//
// write getUserChoices() function
//    DONE-prompt user to enter length
//    -prompt user to confirm lowercase
//    -prompt user to confirm uppercase
//    -prompt user to confirm numeric
//    -prompt user to confirm special characters
//        -at least one character type must be confirmed
// write generatePassword() function
//    -generate password based on user inputs

//
//
// call getUserChoices() at top of writePassword(), above generatePassword()

//
