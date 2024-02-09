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
var scoreEL = document.querySelector('score')
var winsEl = document.querySelector('#wins')
var losesEl = document.querySelector('#losses')

var winsEl = 0
var losesEl = 0

var letters = [] //create alphabet array
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);


var randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
console.log(randomWord)
var chosenWord = randomWord.replace(/./gi,"_");//replace letters with underscore
console.log(chosenWord)
document.querySelector('#word-to-guess').textContent = chosenWord //print chosenWord '_' to page.


var remainingGuess; //when page opens - show remaining-quesses 10
var numberOfGuess = 10;
var remainingAttemps = numberOfGuess--;
var correct = chosenWord.length
console.log(remainingAttemps,'remaining attemps')
document.querySelector('#remaining-guesses').textContent = remainingAttemps// print remaining guesses to page


var wrongCounter = 0;
var myArray = [];
let gameOver = false
//operation to search and check letter when user presses a keyboard key.

console.log('in big for loop')
  
document.onkeyup = function(e) { //create key event
  
  console.log(remainingAttemps,'afterfunction')
  var key = e.key.toLowerCase()
  console.log(e.key ,'enteredLet')
  var gotit = false;
  console.log('almostinforloop')
  for (var j = 0; j < alphabet.length; j++) {//loop through the characters in the alphabet
    if (alphabet[j] === key.toLowerCase()){ //if aplha**
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
        document.querySelector('#remaining-guesses').textContent = remainingAttemps
        

        myArray [wrongCounter] = key;
        wrongCounter ++;
        console.log(wrongCounter, 'the wrong counter')
        for (var x = 0; x < wrongCounter; x++) {
        console.log(remainingAttemps,myArray[x], wrongCounter, 'remain dec')
        document.querySelector('#incorrect-letters').textContent = myArray 
        }
      }

      if (remainingAttemps == 0 ) {//if remaining-guesses alert end of game and get new word
        losesEl++;
        document.querySelector('#losses').textContent = losesEl
        //prevWord = chosenWord;
        console.log(prevWord);
        document.querySelector('#previous-word').textContent = randomWord

        randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
        console.log(randomWord)
        chosenWord = randomWord.replace(/./gi,"_");//replace letters with underscore
        console.log(chosenWord)
        document.querySelector('#word-to-guess').textContent = chosenWord //print chosenWord '_' to page.


        remainingGuess; //when page opens - show remaining-quesses 10
        numberOfGuess = 10;
        remainingAttemps = numberOfGuess--;
        correct = chosenWord.length
        console.log(remainingAttemps,'remaining attemps')
        document.querySelector('#remaining-guesses').textContent = remainingAttemps// print remaining guesses to page


        wrongCounter = 0;
        myArray = [];
        document.querySelector('#incorrect-letters').textContent = myArray 

        //console.log(losses)  
      }
      console.log(correct, chosenWord, 'am i correct')
      console.log('outofforloop')

      if (correct == 0) {
        console.log ('Correct, ' + 'Continue To Next Word')
        console.log(correct, 'letter correct')
        winsEl++;
        document.querySelector('#wins').textContent = winsEl
        //prevWord = chosenWord;
        console.log(prevWord);
        document.querySelector('#previous-word').textContent = randomWord

        randomWord = words[Math.floor(Math.random() * words.length)]; //select random word from array/place in element
        console.log(randomWord)
        chosenWord = randomWord.replace(/./gi,"_");//replace letters with underscore
        console.log(chosenWord)
        document.querySelector('#word-to-guess').textContent = chosenWord //print chosenWord '_' to page.


        remainingGuess; //when page opens - show remaining-quesses 10
        numberOfGuess = 10;
        remainingAttemps = numberOfGuess--;
        correct = chosenWord.length
        console.log(remainingAttemps,'remaining attemps')
        document.querySelector('#remaining-guesses').textContent = remainingAttemps// print remaining guesses to page


        wrongCounter = 0;
        myArray = [];
        document.querySelector('#incorrect-letters').textContent = myArray 
        //document.location.reload();
      } 

      
      function setCharAt(str,index,chr) { //function to replace character in word
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);

        chosenWord = randomWord.replace("_",/./gi,);  //replace the corresponding character in the word
        console.log('replaceLetter')
      }

      var  wordBlanks = document.querySelector('#word-to-guess'); //update character on page
        wordBlanks.innerHTML = chosenWord
    }
  }
      
} 
//function endGame(win) {
//  gameOver = true;//triger


  

//calculate and show score