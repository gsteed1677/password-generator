// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//ARRAYS FOR CRITERIA

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

var numberic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["@", "#", "!", "%", "^", "&", ",", "*", "(", ")", "<", ">", "?",];

//VARIABLES - to confirm with characteristics of password
var confirmLength = "";
var confirmNumeric;
var confirmSpecial;
var confirmUpper;
var confirmLower;

//FUNCTIONS FOR LENGTH

function generatePassword() {
  var confirmLength = prompt("How long do you want your password?");

  //LOOP TO CLARIFY CHARACTER LENGTH - CONFIRM LENGTH

  if (confirmLength <= 8 || confirmLength >= 128) {
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
  if (
    confirmSpecial === false &&
    confirmNumeric === false &&
    confirmLower === false &&
    confirmUpper === false
  ) {
    //rRERUN CONFIRM ON CRITERIA IF VALUES ARE FALSE
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
  //PASSWORD CONFIRMS ASSIGNED VALUE - consitionals in a loop until request is met
  var password = [];

  // I KNOW I NEED A FOR LOOP WITH THE MATH AND MATH FLOOR FROM 

  for (var i = 0; i < confirmLength; i++) {
    
  }

  //NEED TO CREATE SOME SORT OF FOR LOOP AND VARIABLE TO CAPTURE THE CONFIRM DATA
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
