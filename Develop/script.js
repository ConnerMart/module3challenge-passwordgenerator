// arrays of valid characters
var lowerChar = [];
var upperChar = [];
var numericChar = [];
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
    getNumericChoice();
  }
}

function getNumericChoice() {
  var numericChoice = confirm(
    "Do you want your password to include numeric characters?"
  );
  if (numericChoice === true || numericChoice === false) {
    getSpecialChoice();
  }
}

function getSpecialChoice() {
  var specialChoice = confirm(
    "Do you want your password to include special characters?"
  );
  if (lowerChoice || upperChoice || numericChoice || specialChoice) {
    console.log("Valid input.");
  } else {
    console.log("Invalid input.");
  }
}

lowerChoice = false;
upperChoice = false;
numericChoice = false;
specialChoice = false;
getLengthChoice();

//
//
// write getUserChoices() function
//
//        -at least one character type must be confirmed
// write generatePassword() function
//    -generate password based on user inputs

//
//
// call getUserChoices() at top of writePassword(), above generatePassword()

//
