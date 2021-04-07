// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

/***********************/
/• EXPECTATION: Functions           */
/***********************/


// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// - Return the number 5 from this function.
//
// Write your code here 👇

function getNumberFive() {
  // Your code here
}


//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise One-----");
console.log("• EXPECTATION: Returns the number 5");
test(getNumberFive() === 5);


// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// - Complete the function named "add" which takes the two parameters, a and b, adds them 
//   together and returns their sum.
// - For example, calling add(2, 4) should return a result of 6.
//
// Write your code here 👇

function add(a, b) {

}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Two-----");
console.log("• EXPECTATION: Adding 2 and 4 returns 6");
test(add(2, 4) === 6);
console.log("• EXPECTATION: Adding 5 and 8 returns 13");
test(add(5, 8) === 13);


// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - This function has one parameter, number.  
//   Use a conditional (if/else) statement to complete this.
//   If the number is greater than 0, return the number
//   Otherwise, multiply the number by -1 and return it. 
//
// Write your code here 👇

function absoluteValue(number) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Three-----");
console.log("• EXPECTATION: The absolute value of 5 is 5");
test(absoluteValue(5) === 5);
console.log("• EXPECTATION: The absolute value of -3 is 3");
test(absoluteValue(-3) === 3);
console.log("• EXPECTATION: The absolute value of 0 is 0");
test(absoluteValue(0) === 0);


// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// - This function has two parameters, message and text.  
//   Add the text to the end of the message, and then return the complete string.
//
// Write your code here 👇

function concatenate(message, text) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Four-----");
console.log("• EXPECTATION: Concatenating two strings forms a sentence");
test(concatenate("This is a ", "string!") === "This is a string!");
console.log("• EXPECTATION: The initial string can be empty and it still works");
test(concatenate("", "New text!") === "New text!");

// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// - Given the arrayOfNames, determine if the array contains the given name.
// - If the array contains the name, return true.  If it does not, return false.
// - Hint: Use a loop to "iterate" through the array, checking if each name matches the name parameter.
// 
// Write your code here 👇

function contains(arrayOfNames, name) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Five-----");
console.log("• EXPECTATION: Returns true when the array contains the name.");
test(contains(["bob", "nancy", "john", "shawnie", "waldo", "shaquon", "julie"], "nancy") === true);
console.log("• EXPECTATION: Returns false when the name is not in the array");
test(contains(["bob", "nancy", "john", "shawnie", "waldo", "shaquon", "julie"], "fred") === false);


// ----------------------------------------------------------------------------------------------
console.log("Exercise Six");
// - Given the arrayOfNames, determine if the array contains the name "waldo".
// - The name waldo will be all lower-case.
// - If the array contains "waldo", return true.  If it does not, return false.
// - Hint: You don't have to write another loop, or copy-paste your previous function.
//   Just call your previous function, "contains," with the array and the name "waldo" and return the result.
// 
// Write your code here 👇

function containsWaldo(arrayOfNames) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Six-----");
console.log("• EXPECTATION: Returns true when waldo is in an array");
test(containsWaldo(["bob", "nancy", "john", "shawnie", "waldo", "shaquon", "julie"]) === true);
console.log("• EXPECTATION: Returns false when waldo is not in the array");
test(containsWaldo(["bob", "nancy", "john", "shawnie", "shaquon", "julie"]) === false);


// ----------------------------------------------------------------------------------------------
console.log("Exercise Seven");
// - Given the arrayOfNames, if the array contains waldo, then return "I found waldo!"
//   If the array does not contain waldo, then return "I couldn't find waldo..."
// - Hint: Don't actually search for waldo!  Just call your other function, "containsWaldo".
// 
// Write your code here 👇

function searchForWaldo(arrayOfNames) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Exercise Seven-----");
console.log("• EXPECTATION: Returns 'I found waldo!' when waldo is in an array");
test(searchForWaldo(["bob", "nancy", "john", "shawnie", "waldo", "shaquon", "julie"]) === "I found waldo!");
console.log("• EXPECTATION: Returns 'I couldn't find waldo...' when waldo is not in the array");
test(searchForWaldo(["bob", "nancy", "john", "shawnie", "shaquon", "julie"]) === "I couldn't find waldo...");


// ----------------------------------------------------------------------------------------------
console.log("Optional Practice");
// - Given the arrayOfNames, return a sentence which lists all of the names.
// - If the array is empty, then return "There are no names."
// - If there is only one name, then return "The name is " + name + ".", for example "The name is bob."
// - The sentence should start with "The names are "
// - You should add a comma and a space between every name, but on the last name put "and" before 
//   it and a period at the end.
// - For example, if you called 
//   printNames(["bob", "nancy", "john"])
//   then it should return:
//   "The names are bob, nancy, any john."


// - Hint: Use a loop to iterate through the array, concatenating together a string.
//   Every name should  have ", " after it, except for the last name which should have "and " + name + "."
// 
// Write your code here 👇

function printNames(arrayOfNames) {


}

//  -------TESTS---------------------------------------------------------------
//  Run these commands to make sure you did it right. They should all be true.
console.log("-----Tests for Optional Practice-----");
let printNamesResult = printNames(["bob", "nancy", "john"]);
console.log("• EXPECTATION: The sentence starts with 'The names are'");
test(printNamesResult.startsWith("The names are") === true);

console.log("• EXPECTATION: The sentence ends with a period.");
test(printNamesResult.endsWith(".") === true);

console.log("• EXPECTATION: The sentence includes the word 'and'");
test(printNamesResult.includes("and") === true);

console.log("• EXPECTATION: The sentence includes at least one commas");
test(printNamesResult.includes(",") === true);

console.log("• EXPECTATION: The sentence matches the expected result.");
test(printNamesResult === "The names are bob, nancy, and john.");

console.log("• EXPECTATION: When there is only one name, the sentence is correct.");
test(printNames(["bob"]) === "The name is bob.");

console.log("• EXPECTATION: When the list is empty, the sentence is correct.");
test(printNames([]) === "There are no names.");


// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any unnecessary console.log()
// statements from your code (leave the tests alone).
