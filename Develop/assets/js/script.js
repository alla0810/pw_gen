// Assignment code here

function generatePassword()
{
  const length = prompt("length of the password (8-128)");

  console.log(length);

  if (length <8 || length > 128)
  {
    return "Error: Length should be (8-128)";
  }

  const numbers = confirm("Do you want to include numeric characters? (Yes-OK, No-Cancel)");
  const uppercase = confirm("Do you want to include uppercase characters? (Yes-OK, No-Cancel)");
  const lowercase = confirm("Do you want include lowercase characters? (Yes-OK, No-Cancel)");
  const specials = confirm("Do you want to include special characters? (Yes-OK, No-Cancel)");

  /**********************************/
  /*  Validate the input variables  */
  /* At least one character type should be selected */
  /**********************************/

  if (!(numbers || uppercase || lowercase || specials))
  {
    return "Error: At least one character type should be selected";
  }

  let characters = '';

  if (numbers)
  {
    characters += '0123456789';
  }

  if (uppercase)
  {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (lowercase)
  {
      characters += 'abcdefghijklmnopqrstuvwxyz'
  }

  if (specials)
  {
      characters += '!@#$%^&*'
  }

  let passwordArray = [];

  while (passwordArray.length < length)
  {
    const character = characters[Math.floor(Math.random() * characters.length)];

      passwordArray.push(character);    
  }

  return passwordArray.join('');

}



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
