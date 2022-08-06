// arrays of possible characters
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

// when button is clicked, run getChoices
function writePassword() {
  getChoices(); // gets user input and generates random password
  var passwordText = document.querySelector("#password");
  passwordText.value = password; // assigns value of passwordText on page to password variable determined in getChoices() function
}

function getChoices() {
  // stores the user input as a datatype of integer instead of a string
  var lengthChoice = parseInt(
    prompt(
      "How many characters do you want your password to be?" +
        "\n" +
        "Password must be at least 8 characters and no more than 128 characters."
    )
  );
  // alerts the user if their entry is invalid and stops the function
  if (Number.isNaN(lengthChoice)) {
    alert("Password length must be a number.");
    password = ""; // keeps the password box on the page blank
    return;
  } else if (lengthChoice < 8) {
    alert("Password must be at least 8 characters.");
    password = "";
    return;
  } else if (lengthChoice > 128) {
    alert("Password must be no more than 128 characters.");
    password = "";
    return;
  } else
    var lowerChoice = confirm(
      "Do you want your password to include lowercase letters?" +
        "\n" +
        "Click 'OK' for yes or 'Cancel' for no."
    );
  // after asking if the user wants lowercase letters, moves on to the next question regardless of whether they say yes or no
  if (lowerChoice === true || lowerChoice === false) {
    var upperChoice = confirm(
      "Do you want your password to include uppercase letters?" +
        "\n" +
        "Click 'OK' for yes or 'Cancel' for no."
    );
  } else if (upperChoice === true || upperChoice === false);
  {
    var numericChoice = confirm(
      "Do you want your password to include numeric characters?" +
        "\n" +
        "Click 'OK' for yes or 'Cancel' for no."
    );
    if (numericChoice === true || numericChoice === false) {
      var specialChoice = confirm(
        "Do you want your password to include special characters?" +
          "\n" +
          "Click 'OK' for yes or 'Cancel' for no."
      );
    }
    // alerts the user if they said no to all four choices
    if (lowerChoice || upperChoice || numericChoice || specialChoice) {
      generatePassword();
    } else {
      var invalidInput = alert(
        "Password must include at least one of the following: lowercase letters, uppercase letters, numbers, special characters."
      );
      // returns the user to the start of getChoices
      if (invalidInput || !invalidInput) {
        password = "";
        return;
      }
    }
  }
  function generatePassword() {
    // creates a pool of characters which starts off empty
    // adds character arrays based on user choices
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
    // uses the random() function to randomly shuffle the pool
    random(pool);
    // slices off a new pool (from the now-randomized pool of confirmed characters) of the length entered by the user in lengthChoice
    slicedPool = pool.slice(0, lengthChoice);
    // assigns the randomized, sliced pool as the value of the password variable
    password = slicedPool;
  }
}

// TODO: arrays need to be repeating?
// currently if a user chooses a length of 100 but only says yes to numeric values, their password is a maximum 10 characters, 26 for letters, etc.
