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
var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

// shuffle function found/paraphrased from https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
function random(x) {
  for (var i = x.length - 1; i > 0; i--) {
    var n = Math.floor(Math.random() * (i + 1));
    var temp = x[i];
    x[i] = x[n];
    x[n] = temp;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  getChoices();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

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
    getChoices();
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
      "Do you want your password to include uppercase letters?"
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
      generatePassword();
    } else {
      var invalidInput = alert(
        "Password must include at least one of the following: lowercase letters, uppercase letters, numbers, special characters."
      );
      if (invalidInput || !invalidInput) {
        getChoices();
      }
    }
  }
  function generatePassword() {
    var pool = [];
    if (lowerChoice) {
      pool = pool.concat(lowerChar);
    }
    if (upperChoice) {
      pool = pool.concat(upperChar);
    }
    if (numericChoice) {
      pool = pool.concat(numericChar);
    }
    if (specialChoice) {
      pool = pool.concat(specialChar);
    }
    // we now have a pool of characters that the user wants included
    // we use the random() function to randomly shuffle the pool
    random(pool);
    slicedPool = pool.slice(0, lengthChoice);
    password = slicedPool;
  }
}
//
//
//
//
// slice off string with number of characters determined by lengthChoice variable
//
// assign new string as value of password variable
//
//
//
// generatePassword() ultimately needs to assign a value to the password variable (last line of writePassword() function)
