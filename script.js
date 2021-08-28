// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// How the password generator starts

// all variables needed for project

var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCase.split(" ");
var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCase.split(" ");
var numbers = "0 1 2 3 4 5 6 7 8 9";
var numbersArray = numbers.split(" ");
var special = "! @ # $ % ^ & * ( ) _ - = + | \ [ ] { } / < > ? , . ; ' ' :";
var specialArray = special.split(" ");
var allChar = [];
var results = "";

// Password Generator
function generatePassword() {
  // a way to reset the variables
  allChar.length = 0;
  result = '';

  // Prompt for amount of characters
  var char = 0;
  char = prompt("How many chracters do you need?");
  console.log(char);

  // Cancel function when user picks cancel
  if (char === null) {
    return
  }

 // If the character amount is invalid
 if (char < 8 || char > 129 || isNaN(char)) {
   alert("Please choose a number between 8 and 128!")
   char = prompt("How many chracters do you need?");
   console.log(char)
 }

 // cancel function
 if(char === null) {
   return

   // If the chracter amount is invalid twice
 } else if (char < 8 || char > 129 || isNaN(char)) {
   alert("Please choose a number between 8 and 128! Please press the button again.")

 }
 else {
   // confirmation for lowercase
   if(confirm("Do you want lower case letters in your password?")) {
     Array.prototype.push.apply(allChar, lowerCaseArray);
     console.log(allChar);
   }
 }

}
