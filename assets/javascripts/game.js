
//variable storing words to guess



var wordToGuess = ["monkey", "goat", "lion", "dog", "cat", "deer", "elephant", "pig", "horse", "fox"]


var selectWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;


function Game() {
    selectWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
    lettersOfWord = selectWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }
    
    document.getElementById("startword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(selectWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}



function icon() {
    if (selectWord === wordToGuess[0]) {
        document.getElementById("image").src = "assets/images/monkey.jpeg";
    }
    else if (selectWord === wordToGuess[1]) {
        document.getElementById("image").src = "assets/images/goat.jpg";
    }
    else if (selectWord === wordToGuess[2]) {
        document.getElementById("image").src = "assets/images/lion.jpg";
    }
	else if (selectWord === wordToGuess[3]) {
        document.getElementById("image").src = "assets/images/dog.jpg";
    }
    else if (selectWord === wordToGuess[4]) {
        document.getElementById("image").src = "assets/images/cat.jpg";
    }
    else if (selectWord === wordToGuess[5]) {
        document.getElementById("image").src = "assets/images/deer.jpg";
    }
	else if (selectWord === wordToGuess[6]) {
        document.getElementById("image").src = "assets/images/elephant.jpg";
    }
	else if (selectWord === wordToGuess[7]) {
        document.getElementById("image").src = "assets/images/pig.jpg";
    }
	else if (selectWord === wordToGuess[8]) {
        document.getElementById("image").src = "assets/images/horse.jpg";
    }
	else if (selectWord === wordToGuess[9]) {
        document.getElementById("image").src = "assets/images/fox.jpg";
    }
};


function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (selectWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        icon()
        reset()
        document.getElementById("wincount").innerHTML = " " + wins;

        
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "assets/images/you-lose.png"
        document.getElementById("losscount").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("startword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    
    document.getElementById("guessletters").innerHTML = "  " + wrongGuess.join(" ");
}
