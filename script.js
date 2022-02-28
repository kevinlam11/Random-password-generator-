// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );
  console.log(count);

  if (count < 8 || count > 128 || !count) {
    alert("Pick a number between 8 and 128!.");
    alert("Type a number.");
    return "";
  }

  // options for password
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  var numbers = "1234567890";
  var special = "!@#$%^&*()<>?:{}+|";

  var pool = letters;

  // Adds uppercase letters into my password
  if (confirm("Do you want uppercase letters in your password?")) {
    pool += uppercase;
  }

  // Adds special characters into my password
  if (confirm("Do you want special characters in your password?")) {
    pool += special;
  }

  // Adds numbers into my password
  if (confirm("Do you want numbers in your password?")) {
    pool += numbers;
  }

  var genPassword = "";

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * letters.length);
    genPassword += letters[random];
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * numbers.length);
    genPassword += numbers[random];
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * uppercase.length);
    genPassword += uppercase[random];
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * special.length);
    genPassword += special[random];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
