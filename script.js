console.log("Hello World");

let correctSequence = [];
const green = 1;
const red = 2;
const yellow = 3;
const blue = 4;
const greenSelect = document.getElementById('green');
const redSelect = document.getElementById('red');
const yellowSelect = document.getElementById('yellow');
const blueSelect = document.getElementById('blue');
let chosenColor; 

function startGame() {
    document.querySelector('.container').style.display = "block";
    document.getElementById('start').style.display = "block";
    
    chosenColor = Math.floor(Math.random() * 4) + 1;
    console.log(chosenColor);
}