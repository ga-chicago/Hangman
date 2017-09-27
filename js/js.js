const word = "marzipan";
let turns = 10;
const letters = word.split("");
const reveal_letters = word.split("");



const conceal = () => {
for (i=0; i<reveal_letters.length; i++) {
reveal_letters[i] = " _ "
}
display();
}

const guess = () => {
if (turns < 1) {return}
letter = window.prompt("Choose a letter","???").toLowerCase();
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
$("#words").empty();
$("#words").append($show);
$("#guess").text(turns + " more guesses");
}
conceal();

$("#guess").on('click', (e) => {guess()});


const checkWin = () => {
let correct = 1;
for (i=0; i<reveal_letters.length; i++) {
if (reveal_letters[i] === " _ " ) {correct = 0;}
}
display();
if (correct == 1) {alert("You Win!")}
}
