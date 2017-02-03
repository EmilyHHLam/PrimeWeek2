// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.
console.log('Script sourced!');

// * Step One * - Create a variable from user input and conditional statement
  var animal = prompt('Do you know what animal of this lunar year is? ');
// Once you have the animal variable. Write your conditional statement.
// Use these exact strings: 'Try again.' and 'How did you know?!'.
animal = animal.toLowerCase();

if (animal ==='rooster') {
  alert('Rooster indeed!!');
} else if (animal ==='chicken'){
  alert('Should be Rooster but chicken is fine too! Hey! they\'re cousin!');
}
else if (animal === '') {
  alert('common on! let\'s have some fun!');
}
else {
  alert(animal + '? Try again!');
}

// * Step Two * - Refactor into a function
// Call the function by passing the animal variable into it
animalGuess(animal);

function animalGuess(animalName){

  // if statement goes in here.
  if (animalName == 'rooster'){
    console.log('You\'re good!');
  }
  else if (animalName == 'chicken'){
    console.log('Should be Rooster but chicken is fine! They\'re family');
  }
  else if (animalName === '') {
    console.log('common on! let\'s have some fun!');
  }
  else {
    console.log('Sorry! Try again!');
  }
}


// What will this log?
//==THIS CONSOLE willl cause error because the animalName variable is in animalGuess function and not declare globaly
//console.log(animalName);
