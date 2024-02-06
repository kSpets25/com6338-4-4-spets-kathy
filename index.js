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
  'mango'
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
  //console.log(alphabet);

var randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
console.log(randomWord)
var chosenWord = randomWord.replace(/./gi,"_");//replace letters with underscore
console.log(chosenWord)
 
var  wordBlanks= document.querySelector('#word-to-guess');//add the random word as underscore to page
//console.log(randomWord,'call id')
wordBlanks.innerHTML = chosenWord
//console.log(randomWord, 'add to page')

var remainingGuess; //when page opens - show remaining-quesses
//console.log('afterremainingguess')
 var guessCount = 0;
 var numberOfGuesses = 10;
 remainingAttemps = numberOfGuesses--;
 console.log(remainingAttemps,'remaining attemps')

var remainingGuess = document.querySelector('#remaining-guesses'); //call and add value to page
remainingGuess.innerHTML = remainingAttemps

//search and check letter when user presses a letter key.

document.onkeyup = function(e) { //create key event
  console.log(e.key ,'afterfuntion')

  var key = e.key.toLowerCase()
  console.log(e.key ,'enteredLet')

  console.log('almostinforloop')
  for (var i = 0; i < randomWord.length; i++) {//loop through the characters in the word
    console.log(key,i, randomWord.charAt(i),'beginforloop')

    if (randomWord.charAt(i).toLowerCase() === key.toLowerCase()){ //if a match
      chosenWord.charAt(i) == key
      chosenWord = setCharAt(chosenWord,i,key)// call function setCharAt
      

    console.log(chosenWord,'infifloop', [i]);
  }
  console.log('inforloop')
  
}

function setCharAt(str,index,chr) { //function to replace character in word
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);

  chosenWord = randomWord.replace("_",/./gi,);  //replace the corresponding character in the word
  console.log('replaceLetter')
}
var  wordBlanks= document.querySelector('#word-to-guess');
console.log(randomWord,'changes')
wordBlanks.innerHTML = chosenWord
console.log(randomWord, 'changesPlus')
  console.log('outofforloop')
  
}     
  
//calculate and show score