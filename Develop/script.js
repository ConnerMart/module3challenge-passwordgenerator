// arrays of valid characters
var lowerCase = [];
var upperCase = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hi");
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function getUserChoices() {
//   var lengthChoice = parseInt(
//     prompt("How many characters do you want your password to contain?")
//   );
//   if (Number.isNaN(lengthChoice)) {
//     alert("Password length must be a number.");
//   }
//   if (length < 8) {
//     alert("Password must be at least 8 characters.");
//   }
//   if (length > 128) {
//     alert("Password must be at least 8 characters.");
//   }
// }

// write generatePasssword() function
