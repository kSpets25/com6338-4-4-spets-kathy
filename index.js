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
var letters = []
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);


//select a word at random from the provided words array and place it in the #word-to-guess element
//with its letters replaced as underscores.
var randomWord = words[Math.floor(Math.random() * words.length)];
var chosenWord = "_".repeat(randomWord.length); 

var randomWordOutput = document.querySelector('#word-to-guess');
randomWordOutput.innerHTML = chosenWord

//when page opens - show 10 remaining-quesses.
var remainingGuess;
 var guessCount = 0;
 var numberOfGuesses = 11;
 remainingAttemps = numberOfGuesses--;
 console.log(numberOfGuesses) 

var numberOfGuessesStart = document.querySelector('#remaining-guesses');
numberOfGuessesStart.innerHTML = numberOfGuesses

//Check letter when user presses a letter key, code should check whether the letter is included in the word.

document.onkeyup = function(e) {
  //filter letters
  var key = e.key.toLowerCase(e)
  if (letters.indexOf(key) == chosenWord.textContent)
  
  
  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);}
    chosenWord.textContent = e.key
  
  console.log (e.key)
  
 

}


//if the letter is included, it should replace the underscore in the word-to-guess element.

/*incorrect letter (or a non letter key is pressed) letter chosen then no change and the 
incorrect-letters element should be displayed. 
remaining-guesses element should decrease by 1 guess.*/

//show previous word

//calculate and show score








