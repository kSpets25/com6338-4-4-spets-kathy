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
var winsEl = document.querySelector('#wins')
var losesEl = document.querySelector('#losses')


var wins = 0
var losses = 0

var letters = [] //create alphabet array
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  //console.log(alphabet);

var randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
console.log(randomWord)
var chosenWord = randomWord.replace(/./gi,"_");//replace letters with underscore
console.log(chosenWord)
document.querySelector('#word-to-guess').textContent = chosenWord //add word to page


var remainingGuess; //when page opens - show remaining-quesses 10
//console.log('afterremainingguess')
 var numberOfGuess = 10;
 var remainingAttemps = numberOfGuess--;
 correct = chosenWord.length
 console.log(remainingAttemps,'remaining attemps')
document.querySelector('#remaining-guesses').textContent = remainingAttemps// remaining guesses to page


var wrongCounter = 0;
var myArray = [];

//search and check letter when user presses a letter key.
document.onkeyup = function(e) { //create key event
  
  console.log(remainingAttemps,'afterfunction')
  var key = e.key.toLowerCase()
  console.log(e.key ,'enteredLet')
var gotit = false;
  console.log('almostinforloop')
  for (var i = 0; i < randomWord.length; i++) {//loop through the characters in the word
    console.log(key,i, randomWord.charAt(i),'beginforloop')
    
    if (randomWord.charAt(i).toLowerCase() === key.toLowerCase()){ //if a match
      chosenWord.charAt(i) == key
      chosenWord = setCharAt(chosenWord,i,key)// call function setCharAt
      
      gotit = true // if correct letter continue through loop
      correct--;
      console.log(chosenWord, correct, 'infifloop', [i]);
    }
        
    console.log('inforloop')
  
  }
  if (gotit == false) {//if not correct letter decrease guesses by 1
     remainingAttemps--;
     
    var remainingGuess = document.querySelector('#remaining-guesses')//update guesses
    remainingGuess.innerHTML = remainingAttemps

    myArray [wrongCounter] = key;
    wrongCounter ++;
    console.log(wrongCounter, 'the wrong counter')
    for (var x = 0; x < wrongCounter; x++) {
    console.log(remainingAttemps,myArray[x], wrongCounter, 'remain dec')

    var incorrectLtr = document.querySelector('#incorrect-letters'); //update incorrect character on page
    incorrectLtr.innerHTML = myArray
    }
  }
  if (remainingAttemps == 0 ) {//if remaining-guesses alert end of game and get new word
    alert ('You Lose')
    document.location.reload();
    
  }
  console.log(correct, 'am i correct')
  if (correct == 0) {
    alert ('Correct, ' + 'Continue To Next Word')
    document.location.reload();
    console.log(correct, 'letter correct')
  }
  
function setCharAt(str,index,chr) { //function to replace character in word
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);

  chosenWord = randomWord.replace("_",/./gi,);  //replace the corresponding character in the word
  console.log('replaceLetter')
}

var  wordBlanks= document.querySelector('#word-to-guess'); //update character on page
wordBlanks.innerHTML = chosenWord
console.log('outofforloop')
  
}    

//calculate and show score