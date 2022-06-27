// ASSIGNMENT CODE HERE
var get = document.querySelector("#generate");

// VARIABLES
var enter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;

// VARIABLES VALUES
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "]"];
all = ["1", "2", "3", "4", "5", "6", "7", "8", "9","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "]"];

// INITIAL PROMPT TO ASK QUESTIONS FOR PASSWORD CRITERIA
function generatePassword() {

// CHARACTER LENGTH SELECTION
     var enter = prompt("How many characters would you like your password to include? Please choose between 8 and 128");

// IF INPUT IS EMPTY
  if (!enter) {
      alert("FAILURE: You must input a value.");
  }

// IF INPUT IS OUTSIDE OF ACCEPTABLE RANGE
  else if (enter < 8 || enter > 128) {
      enter = prompt("FAILURE: Value must be between 8 and 128 characters long.");
  }

// FOLLOWING FOUR CRITERIA QUESTIONS
  else {
      confirmNumber = confirm("Would you like to include #numbers?");
      confirmUppercase = confirm("Would you like to include UPPERCASE letters?");
      confirmLowercase = confirm("Would you like to include lowercase letters?");
      confirmCharacter = confirm("How about some special characters?");
  };

// IF NO OPTION IS SELECTED
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    selection = alert("Failure: You must choose at least 1 option.");
  }

// IF ALL FOUR OPTIONS ARE SELECTED
  else if (confirmNumber && confirmUppercase && confirmLowercase && confirmNumber) {
    selection = (all)
  }

// IF THREE OPTIONS ARE SELECTED
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    selection = number.concat(upper, lower);}
  else if (confirmNumber && confirmUppercase && confirmCharacter) {
    selection = number.concat(upper, character);}
  else if (confirmNumber && confirmLowercase && confirmCharacter) {
    selection = number.concat(lower, character);}
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    selection = upper.concat(lower, character);}

// IF TWO OPTIONS ARE SELECTED
  else if (confirmNumber && confirmUppercase) {
    selection = (number, upper);}
  else if (confirmNumber && confirmLowercase) {
    selection = (number, lower);}
  else if (confirmNumber && confirmCharacter) {
    selection = (number, character);}
  else if (confirmUppercase && confirmLowercase) {
    selection = (upper, lower);}
  else if (confirmUppercase && confirmCharacter) {
    selection = (upper, character);}
  else if (confirmLowercase && confirmCharacter) {
    selection = (lower, character);}

// IF ONE OPTION IS SELECTED
  else if (confirmNumber) {
    selection = number;}
  else if (confirmUppercase) {
    selection = upper;}
  else if (confirmLowercase) {
    selection = lower;}
  else if (confirmCharacter) {
    selection = character;};

// LENGTH OF THE PASSWORD/LEFT BLANK AS IS DECIDED BY USER INPUT SELECTION 
  var password = [];

// RANDOMISING SELECTION FOR THE USER PASSWORD
  for (var i = 0; i < enter; i++) {
      var userSelection = selection[Math.floor(Math.random() * selection.length)];
      password.push(userSelection);
  }
// JOINING AND RETURNING PASSWORD
      var finalpassword = password.join("");
      UserInput(finalpassword);
      console.log = finalpassword;
}

// GENERATES NEW PASSWORD INTO TEXT AREA
function UserInput(finalpassword) {
document.getElementById("password").textContent = finalpassword;
}
get.addEventListener("click", function () {
  ps = generatePassword();
});