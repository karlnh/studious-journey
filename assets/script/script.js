// Assignment code here

const lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numChar = ['0','1','2','3','4','5','6','7','8','9'];
const specChar = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','\\','|','`','~'];

function generatePassword() {

  // Password length
  passLength = window.prompt("Choose a password length that is at least 8 characters long and no longer than 128 characters.", "8");
  
  if (passLength < 8 || passLength > 128) {
    console.log("Password outside range.")
    window.alert('You have entered a password length outside the acceptable range. Please click "Generate Password" to try again.');
    return null;

  } else if (passLength === null || isNaN(passLength)) { // WHY ISNT THIS WORKING???????????????????????????
    console.log("Password generation cancelled.")
    window.alert('You must enter a proper password length. Please click "Generate Password" to try again.');
    return "";

  } else {
    console.log(passLength);
    window.alert("Your password will be " + passLength + " characters long.")
  }

  // User selects which character sets they want
  lowerT = (window.confirm("Do you want lowercase characters?"));
  upperT = (window.confirm("Do you want uppercase characters?"));
  numT = (window.confirm("Do you want numerical characters?"));
  specT = (window.confirm("Do you want special characters?"));

  // Testing for which character sets are chosen by the user
  concatArray = []; // Will contain selected sets
  if (lowerT) {
    concatArray = concatArray.concat(lowerChar);
   }
  if (upperT) {
    concatArray = concatArray.concat(upperChar);
   }
  if (numT) {
    concatArray = concatArray.concat(numChar);
   }
  if (specT) {
    concatArray = concatArray.concat(specChar);
     // if no sets are selected
   }
  if (!lowerT && !upperT && !numT && !specT) {
    window.alert("No character sets selected. No password can be generated. Please try again.");
    console.log("failed");
   }

  // Selects a random character from a given array
  function randomChar(array) { 
    charString = array[Math.floor(Math.random() * array.length)]; //random array position
    return Array(charString); // returns arrayed version of the random character
  }

  //add random characters from concatArray until passLength is reached
  let passString = "";

  for (let i = 0; i < passLength; i++) {
      passString = passString + randomChar(concatArray); //because of type coercion, randomChar will simply turn into a string, rather than staying an index.
    }  
  return passString;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

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
