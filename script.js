// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//ARRAYS FOR CRITERIA - lower, upper, numeric, special signs
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

var numeric = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!","@", "#", "%", "^", "&", "*", "(", ")", "<", ">", "?",];

//VARIABLES - to confirm with characteristics of password
var confirmLength = "";
//PASSWORD CONFIRMS ASSIGNED VALUE - consitionals in a loop until request is met
var password = [];
var userSetChars = [];

//FUNCTIONS FOR LENGTH
function generatePassword() {
  var confirmLength = prompt("How long do you want your password?");
 //IF STATEMENT TO CREATE LOOP OF CERTAIN AMOUNT OF LENGTH - ConfirmLength needed - 8/128

  if (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password must be between 8 and 128 characters long");
    var confirmLength = prompt("How long do you want your password?");
  }


  //VARIABLE FOR FALSE IF NO CRITERIA IS PICKED
  var hasParameter = false;
  
  //CONFIRM  FUNCTION FOR LOWERCASE, NUMERIC, SPECIAL CHARACTERS
  let nChars = confirm("Press Ok to add numbers to your password");
  if (nChars) {
    userSetChars.push(...numeric);
    hasParameter = true;
  }
  //CONSOLE LOG TO MAKE SURE EACH STEP WAS WORKING 
  //NEED TO LOOK INTO ... MORE - TUTOR WAS HELPFUL BUT NEED TO UNDERSTAND MORE AND WORK WITH IT MORE
  console.log(userSetChars)

  let uChars = confirm("Press ok to add upper case letters to your password");
  if (uChars) {
    userSetChars.push(...upper);
    hasParameter = true;
  }
  console.log(userSetChars)

  let lChars = confirm("Press Ok to add lower case letters to your password");
  if (lChars) {
    userSetChars.push(...lower);
    hasParameter = true;
  }
  console.log(userSetChars)
  
  let sChars = confirm("Press Ok to add special characters to your password")
  if (sChars) {
    userSetChars.push(...special);
    hasParameter = true;
  } 
  // ADDED AN ALERT TO INFORM USER TO PICK ONE CRITERIA, WILL HAVE TO START THE PROCESSES AGAIN
  if(hasParameter === false){
    alert("You have to choose at least one set parameter if you want a secure password! Press the button again to try again!");
  }
  console.log(userSetChars)
  

  // I KNOW I NEED A FOR LOOP WITH THE MATH AND MATH FLOOR FROM 

  for (var i = 0; i < confirmLength; i++) {
  password.push(userSetChars[Math.floor(Math.random() * userSetChars.length)]);
  //CONSOLE LOGGING TO MAKE SURE THIS FUNCTION WORKS PROPERLY
    console.log(password.join("+"));
  }

  // RETURN PASSWORD VALUE AND JOIN CRITERIA TOGETHER
  return password.join("")


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}