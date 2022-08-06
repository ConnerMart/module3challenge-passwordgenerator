// arrays of valid characters
var lowerChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  ",",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getChoices();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getChoices() {
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
    getChoices();
  } else if (lengthChoice > 128) {
    alert("Password must be no more than 128 characters.");
    getChoices();
  } else
    var lowerChoice = confirm(
      "Do you want your password to include lowercase letters?"
    );
  if (lowerChoice === true || lowerChoice === false) {
    var upperChoice = confirm(
      "Do you want your password to include uppercase latters?"
    );
  } else if (upperChoice === true || upperChoice === false);
  {
    var numericChoice = confirm(
      "Do you want your password to include numeric characters?"
    );
    if (numericChoice === true || numericChoice === false) {
      var specialChoice = confirm(
        "Do you want your password to include special characters?"
      );
    }
    if (lowerChoice || upperChoice || numericChoice || specialChoice) {
      var password = generatePassword();
    } else {
      var invalidInput = alert(
        "Password must include at least one of the following: lowercase letters, uppercase letters, numbers, special characters."
      );
      if (invalidInput || !invalidInput) {
        getChoices();
      }
    }
  }
}

function generatePassword() {}
