// Assignment Code

var generateBtn = document.querySelector("#generate");

//Write password to the #password input

function writePassword() {
  var password = generatePassword();
  alert("Your generated password is: " + password);
}

function generatePassword() {
  var length = prompt("Enter the desired password length (maximum 8 characters):");
  length = parseInt(length);

    if (isNaN(length) || length <= 0 || length > 8) {
      alert("Invalid password length. Please enter a number between 1 and 8.");
      return "";
  }

  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  var characters = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()";

    if (lowercase) {
      characters += lowercaseChars;
  }
    if (uppercase) {
      characters += uppercaseChars;
  }
    if (numeric) {
      characters += numericChars;
  }
    if (special) {
      characters += specialChars;
  }

  var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
  }

  return password;
}

//Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

