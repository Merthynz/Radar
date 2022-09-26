// Get our user input
function getValue() {
    
    // Make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");
    
    // Get user string from the page
    let userString = document.getElementById("userString").value;

    // Check for a palindrome
    let returnObj = checkForPalindrome(userString);

    // Display our message to the screen
    displayMessage(returnObj);
}

// Check if string is a palindrome
function checkForPalindrome(userString) {


    // taco cat
    userString = userString.toLowerCase();

    // Remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    } 

    returnObj.reversed = revString;

    return returnObj;
    
}

// Display a message to the string.
function displayMessage(returnObj) {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}

// *****************************************************************
/* Solution for reversible

// Get the string from the page
// Controller function
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Revese the string
// Logic function 
function reverseString(userString){

    let revString = [];
    
    // Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
}

// Display our reversed string to the user
// View function
function displayString(revstring){

    // Write to the page
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${revstring}`;
    document.getElementById("alert").classList.remove("invisible");
}

*/