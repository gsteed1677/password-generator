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

//ARRAYS
var lowerCase = [
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
var upperCase = [
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
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];

//VARIABLES - to confirm with characteristics of password
var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;

//FUNCTIONS FOR LENGTH

function generatePassword() {
  var confirmLength = prompt("How long do you want your password?");
}

//LOOP TO CLARIFY CHARACTER LENGTH - CONFIRM LENGTH

while (confirmLength <= 8 || confirmLength >= 128) {
  alert("Password must be between 8 and 128 characters long!");
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );
}

//FUNCTION FOR LOWERCASE, NUMERIC, SPECIAL CHARACTERS

var confirmSpecialChar = confirm(
  "Click OK for special characters in your password"
);
var confirmNumericChar = confirm("Click OK to add a numbers to your password");
var confirmLowerCase = confirm(
  "Click OK for lower case letters in your password"
);
var confirmUpperCase = confirm(
  "Click OK for upper case letters in your password"
);
