var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango',
];

var randomWord = document.querySelector('#word-to-guess')
var prevWord = document.querySelector('#previous-word')
var incorrectLtr = document.querySelector('#incorrect-letters')
var remainingGuess = document.querySelector('#remaining-guesses')
var scoreEl = document.querySelector('score')
var winsEl = document.querySelector('#wins')
var losesEl = document.querySelector('#losses')

var correct = 0
var incorrect = 0

var letters = [] //create alphabet array
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);

document.onkeyup = function(e) {  //create key event
  console.log(e.key)
}

var randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
console.log(randomWord)
var chosenWord= "_".repeat(randomWord.length);
console.log(chosenWord)
 
var randomWordOutput = document.querySelector('#word-to-guess'); //add to document
randomWordOutput.innerHTML = chosenWord

var remainingGuess; //when page opens - show remaining-quesses
 var guessCount = 0;
 var numberOfGuesses = 11;
 remainingAttemps = numberOfGuesses--;
 console.log(numberOfGuesses) 

var numberOfGuessesStart = document.querySelector('#remaining-guesses'); //add value to document
numberOfGuessesStart.innerHTML = numberOfGuesses

//search and check letter when user presses a letter key - replace letter or do nothing.

function updateLetter() {
  document.onkeyup = function(e) {  //create key event
    console.log(e.key)
  }
  //var chosenWord = chosenWord.split('');//split the clue into an array
  var chosenLet= (e.key)
  for (let i = 0; i < chosenWord.length; i++){ //loop through the characters in thee word
    if (chosenWord.charAt(i).toLowerCase() === chosenLet.toLowerCase()) { //if the letter matches the guess
      chosenLet[i] = chosenWord.charAt(i);  //replace the corresponding character in the word
     }
    }
    chosenWord[i] = chosenWord.join('');//convert the clue array back into a string
    return chosenWord;
  }
var chosenLet= document.querySelector('#word-to-guess');
chosenLet.innerHTML = chosenWord



  

//show previous word

//calculate and show score

