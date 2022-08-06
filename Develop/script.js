// arrays of valid characters
var lowerCaseChar = [];
var upperCaseChar = [];
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

function getUserChoice() {
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
  } else alert("cool");
}

getUserChoice();

//
//
// write getUserChoices() function
//    -prompt user to enter length
//        -input has to be a number
//        -input has to be at least 8 and no more than 128
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
