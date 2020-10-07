// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//ARRAYS OR VARIABLE STRINGS
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = [
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
var upper = [
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

//VARIABLES - to confirm with characteristics of password
var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

//FUNCTIONS FOR LENGTH

function generatePassword() {
  var confirmLength = prompt("How long do you want your password?");

  //LOOP TO CLARIFY CHARACTER LENGTH - CONFIRM LENGTH

  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password must be between 8 and 128 characters long");
    var confirmLength = prompt("How long do you want your password?");
  }

  //CONFIRM  FUNCTION FOR LOWERCASE, NUMERIC, SPECIAL CHARACTERS

  var confirmSpecial = confirm(
    "Click OK for special characters in your password"
  );
  var confirmNumeric = confirm("Click OK to add numbers to your password");
  var confirmLower = confirm(
    "Click OK for lower case letters in your password"
  );
  var confirmUpper = confirm(
    "Click OK for upper case letters in your password"
  );

  //NEED A VALUE - RUN AGAIN IF ALL FALSE
  while (
    confirmSpecial === false &&
    confirmNumeric === false &&
    confirmLower === false &&
    confirmUpper === false
  ) {
    alert("Please pick a number or spacial value");
    var confirmSpecial = confirm(
      "Click OK for special characters in your password"
    );
    var confirmNumeric = confirm("Click OK to add numbers to your password");
    var confirmLower = confirm(
      "Click OK for lower case letters in your password"
    );
    var confirmUpper = confirm(
      "Click OK for upper case letters in your password"
    );
  }
}
//PASSWORD CONFIRMS ASSIGNED VALUE

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
