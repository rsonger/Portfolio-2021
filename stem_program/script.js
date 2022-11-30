/*
  You can change anything on this page--HTML tags, CSS styles, JavaScript 
  functions, etc. Do what you need to make it suitable for your STEM problem.
  The lines of YOUR CODE are just a suggestion.

  The getInput function will take user input from the page. You should call  
  your functions from inside the getInput function.
  
  The writeOutput function will write some given text to the output span on
  the page. You can call this function with your code when you have a result.
  */

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function getInput() {
  let inputField = document.getElementById("input1");
  let input = inputField.value;

  // do something with the input
  writeOutput(input); // <-- replace this with YOUR CODE
}


// This function will write some text to the output span on the page.
function writeOutput(text) {
  let outputSpan = document.getElementById("output1");
  outputSpan.innerText = text;
}