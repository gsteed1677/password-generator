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

//ARRAYS OR VARIABLE STRINGS
var letters = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//VARIABLES - to confirm with characteristics of password
var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;
var password = "";

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
var confirmNumericChar = confirm("Click OK to add numbers to your password");
var confirmLowerCase = confirm(
  "Click OK for lower case letters in your password"
);
var confirmUpperCase = confirm(
  "Click OK for upper case letters in your password"
);

//PASSWORD CONFIRMS ASSIGNED VALUE
