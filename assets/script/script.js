// Assignment code here

const lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numChar = [0,1,2,3,4,5,6,7,8,9];
const specChar = ["!","?"];

function randomChar(array) { // Selects a random character from a given array
  min = Math.ceil(1);
  max = Math.floor(array.length);
  return array[Math.floor(Math.random() * (max - min) + min)];
  // Thank you MDN doc on Math.random()!
}


function generatePassword() {

  // series of password criteria prompts
  passLength = window.prompt("Choose a password length that is at least 8 characters long and no longer than 128 characters.", "8");
  
  if (passLength < 8 || passLength > 128) {
    console.log("Password outside range.")
    window.alert('You have entered a password length outside the acceptable range. Please click "Generate Password" to try again.');
    return null;

  } else if (passLength === null) { // if they click cancel
    console.log("Password generation cancelled.")
    window.alert('You must enter a password length. Please click "Generate Password" to try again.');
    return null;

  } else { // password length selected
    console.log(passLength);
    window.alert("Your password will be " + passLength + " characters long.")
  }

  // Here they select which character sets they want.
  let concatArray = [];
  let selectedString = "";
  lowerT = (window.confirm("Do you want lowercase characters?"));
  upperT = (window.confirm("Do you want uppercase characters?"));
  numT = (window.confirm("Do you want numerical characters?"));
  specT = (window.confirm("Do you want special characters?"));

  if (lowerT) { // if any of the following are true,
    concatArray.concat(lowerChar); // concat the corresponding character set to concatArray.
    console.log("lower");
  } if (upperT) {
    concatArray.concat(upperChar);
    console.log("upper");
  } if (numT) {
    concatArray.concat(numChar);
    console.log("num");
  } if (specT) {
    concatArray.concat(specChar);
    console.log("spec");
  } if (!lowerT && !upperT && !numT && !specT) {
    window.alert("No character sets selected. No password can be generated");
    console.log("failed")
    generatePassword();
  }
  
  
  
  
  

  // Here is the password generation:
    // selectedArrays = [lowerChar,upperChar,numChar,specChar]?
    // password = []
    // If i !== passLength,
      // For i in password[i],
      // Decide which character set to pull from:
        // 
      // Then randomChar() from that array,
      // And append it to password at [i].
      // i++.
    // Else, if i === passLength,
      // We're done making the password.
// Return password.

}

// Get references to the #generate element in html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
