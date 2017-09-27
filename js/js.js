const words = ["marzipan", "parmesan", "electricity", 'elephant','dinosaur']
const already = [];
let word = "marzipan";
let turns = 10;
let randomNumber = 0

const chooseWord = () => {
word = words[randomNumber];
console.log(word);
randomNumber++;
if (randomNumber > 4) {randomNumber = 0}
}

const conceal = () => {
for (i=0; i<reveal_letters.length; i++) {
	reveal_letters[i] = " _ "
}
display();
}

const guess = () => {
if (turns < 1) {alert("GO THY WAYS"); return}
letter = window.prompt("CHOOSE A LETTER, SON OF MAN","???").toLowerCase();
already.push(letter);
let correct = 0;
for (i=0; i<reveal_letters.length; i++) {
	if (letter === letters[i] ) {reveal_letters[i] = " "+ letter + " "; correct = 1;}
}
if (correct == 0) {turns--;}
display();
checkWin();
}

const display = () => {
$show = $("<p>");
$show.text(reveal_letters.join(""));
$already = $("<p>");
$already.text(already.join(" "));

$("#words").empty();
$("#words").append($show);
$("#words").append($already);
$("#guess").text(turns + " MORE GUESSES");
}

$("#guess").on('click', (e) => {guess()});


const checkWin = () => {
let correct = 1;
for (i=0; i<reveal_letters.length; i++) {
	if (reveal_letters[i] === " _ " ) {correct = 0;}
}
display();
if (correct == 1) {
alert("CONGRATULATIONS MORTAL");
chooseWord();
console.log(word);
letters = word.split("");
already = [];
reveal_letters = word.split("");
turns = 10;
conceal();
}
}

chooseWord();
let letters = word.split("");
let reveal_letters = word.split("");
conceal();