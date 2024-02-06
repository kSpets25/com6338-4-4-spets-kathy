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

/*document.onkeyup = function(e) {  //create key event
  console.log(e.key)
}*/

var randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
console.log(randomWord)
var chosenWord = "_".repeat(randomWord.length);
console.log(chosenWord)
 
var  wordBlanks= document.querySelector('#word-to-guess');
console.log(randomWord,'changes')
wordBlanks.innerHTML = chosenWord
console.log(randomWord, 'changesPlus')




var remainingGuess; //when page opens - show remaining-quesses
console.log('afterremainingguess')
 var guessCount = 0;
 var numberOfGuesses = 10;
 remainingAttemps = numberOfGuesses--;
 console.log(remainingAttemps,'remainingattemps')

var remainingGuess = document.querySelector('#remaining-guesses'); //add value to document
remainingGuess.innerHTML = remainingAttemps

//document.onkeyup = function(e) {//create key event
  //console.log(e.key) }

//search and check letter when user presses a letter key - replace letter or do nothing.

document.onkeyup = function(e) { //create key event
  console.log(e.key ,'afterfuntion')
  var key = e.key.toLowerCase()
  console.log(e.key ,'enteredLet')
  //if (letters.indexOf(key) == -1) return
  console.log(e.key,'keyandlettersafterindexof')
 // var letter = letters[Math.floor.random() * (26)]
  //console.log(key, letter)


  console.log('almostinforloop')
  for (var i = 0; i < randomWord.length; i++) {//loop through the characters in thee word
    console.log(key,i, randomWord.charAt(i),'beginforloop')

    if (randomWord.charAt(i).toLowerCase() === key.toLowerCase()){
      chosenWord.charAt(i) == key
    console.log(chosenWord,'infifloop', [i]);
  }
  console.log('inforloop')
}
console.log('outofforloop')
    /*if the letter matches the guess
    chosenLet = chosenWord.charAt(i).replace('_');  //replace the corresponding character in the word
  console.log('replaceLetter')*/

}     
   
  
  //chosenWord[i] = chosenWord.join('_');//convert the clue array back into a string
 
    
//calculate and show score