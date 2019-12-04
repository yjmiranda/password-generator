//Constant variables for the minimum and maximum password length.
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 128;

//String variables containing the four character types.
var special = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var characterPool; //will be used to store the chosen strings within an array

//will store boolean values
var confirmSpecial;
var confirmNumeric;
var confirmLowercase;
var confirmUppercase;

//will store the pointer to the textarea
var boxContent = document.getElementById("passwordBox");

//Returns a random character within a string.
function randomCharacter(str){
    return str.charAt(Math.floor(Math.random()*str.length));
}

//Returns a random element within an array.
function randomString(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function copyPassword() {

    /* Select the text field */
    boxContent.focus();
    boxContent.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Your password has been copied to the clipboard.");
}

function generatePassword(){
    var password = ""; //empty string to be filled in later

    var passwordLength = prompt("How many characters would you like your password to contain?");

    if (passwordLength >= PASSWORD_MIN && passwordLength <= PASSWORD_MAX){
    
        confirmSpecial = confirm("Click OK to confirm special characters.");
        confirmNumeric = confirm("Click OK to confirm numeric characters.");
        confirmLowercase = confirm("Click OK to confirm lowercase characters.");
        confirmUppercase = confirm("Click OK to confirm uppercase characters.");

        if (confirmSpecial && confirmNumeric && confirmLowercase && confirmUppercase){

            characterPool = [special, numeric, lowercase, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric && confirmLowercase && confirmUppercase === false){

            characterPool = [special, numeric, lowercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric && confirmLowercase === false && confirmUppercase){

            characterPool = [special, numeric, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric === false && confirmLowercase && confirmUppercase){

            characterPool = [special, lowercase, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial === false && confirmNumeric && confirmLowercase && confirmUppercase){

            characterPool = [numeric, lowercase, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial === false && confirmNumeric === false && confirmLowercase && confirmUppercase){

            characterPool = [lowercase, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial === false && confirmNumeric && confirmLowercase === false && confirmUppercase){

            characterPool = [numeric, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial === false && confirmNumeric && confirmLowercase && confirmUppercase === false){

            characterPool = [numeric, lowercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric === false && confirmLowercase === false && confirmUppercase){

            characterPool = [special, uppercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric === false && confirmLowercase && confirmUppercase === false){

            characterPool = [special, lowercase];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }            
        else if (confirmSpecial && confirmNumeric && confirmLowercase === false && confirmUppercase === false){

            characterPool = [special, numeric];

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(randomString(characterPool)));
            }
        }
        else if (confirmSpecial && confirmNumeric === false && confirmLowercase === false && confirmUppercase === false){

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(special));
            }
        }
        else if (confirmSpecial === false && confirmNumeric && confirmLowercase === false && confirmUppercase === false){

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(numeric));
            }
        }
        else if (confirmSpecial === false && confirmNumeric === false && confirmLowercase && confirmUppercase === false){

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(lowercase));
            }
        }
        else if (confirmSpecial === false && confirmNumeric === false && confirmLowercase === false && confirmUppercase){

            for(var i = 0; i < passwordLength; i++){
                password = password.concat(randomCharacter(uppercase));
            }
        }
        boxContent.textContent = password;
    }
    else {
        alert("Password length must be between " + PASSWORD_MIN + " and " + PASSWORD_MAX + " characters.");
    }
}