// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );
  console.log(count);

  // alerts
  if (count < 8 || count > 128 || !count) {
    alert("Pick a number between 8 and 128!.");
    alert("Type a number.");
    return "";
  }

  // options for password
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  var numbers = "1234567890";
  var special = "!@#$%^&*()<>?:{}+|";

  var pool = "";

  // Adds lowercase letters into my password
  if (confirm("Do you want lowercase letters in your password?")) {
    pool += lowercaseLetters;
  }

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

  // Return if character type wasnt defined
  if (pool === "") {
    alert("Select one character type");
    return "Try Again";
  }

  var genPassword = "";
  // Create a random password from the pool
  for (var i = 0; i < count; i++) {
    var randomIdx = Math.floor(Math.random() * pool.length);
    var randomChar = pool[randomIdx];
    genPassword += randomChar;
    console.log(genPassword);
  }

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
