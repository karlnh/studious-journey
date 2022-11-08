// Assignment code here

// You COULD do a bunch of variables; you could ALSO do a single object with different properties named these variables.

// Each object has a varState that will be toggled depending on the results of generatePassword().
let lowerCase = {
  varState: false,
  charList: []
}
let upperCase = {
  varState: false,
  charList: []
}
let numberTxt = {
  varState: false,
  charList: []
}
let specialChar = {
  varState: false,
  charList: []
}
let passLength = {
  userChoice: 0,
  passMin: 8,
  passMax: 128
};


function generatePassword() {
  // Series of prompts for password criteria.
    // User input: Choose length of password.
    // Confirmation box: Which criteria do you want?
      // Prompt: Include lowercase?
      if (window.confirm("Include lowercase?")) { //if they want to include lowercase,
        lowerCase.varState = true;
        console.log(lowerCase.varState);
        }

        
      }
      // Prompt: Uppercase?
      // Prompt: Lowercase?
      // Prompt: Numeric?
      // Prompt: Special characters?
      // Else Error: Must select at least one criterion. Restart confirmation.

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
