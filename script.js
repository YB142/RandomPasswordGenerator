// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
      var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var numbers= '0123456789';
      var punctuation = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      var specialCharacters = ''

function generatePassword() {
var userPassword = '';
var password = '';
var Length = prompt('What is the length of the password?');
var upperCaseCh = confirm('Would you like to use uppercase?');
if (upperCaseCh) {
userPassword += uppercase;
}

var lowerCaseCh = confirm('Would you like to use Lowercase?');
if (lowerCaseCh) {
  userPassword += lowercase;
}

var numbersCh = confirm('Would you like to use Numbers?');
if (numbersCh) {
  userPassword += numbers;
}

var punctuationCh = confirm('Would you like to use Punctuation?');
if (punctuationCh) {
  userPassword += punctuation;
}

for (var i = 0; i < Length; i ++) {
  password += userPassword.charAt(Math.floor(Math.random()* userPassword.length))
}
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);