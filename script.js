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
const audioGreen = new Audio ('./sounds/green.mp3')
const audioRed = new Audio ('./sounds/red.mp3')
const audioYellow = new Audio ('./sounds/yellow.mp3')
const audioBlue = new Audio ('./sounds/blue.mp3')
const audioWrong = new Audio ('./sounds/wrong.mp3')
let chosenColor; 

function playGreen() {
    greenSelect.setAttribute ("class", "btn pressed");
    audioGreen.play();
    setTimeout(() => greenSelect.removeAttribute ('class'), 500);
    setTimeout(() => greenSelect.setAttribute("class", "btn green"), 500);
};

function playRed() {
    redSelect.setAttribute ('class', 'btn pressed');
    audioRed.play();
    setTimeout(() => redSelect.removeAttribute ('class'), 500);
    setTimeout(() => redSelect.setAttribute("class", "btn red"), 500);
};

function playYellow() {
    yellowSelect.setAttribute ('class', 'btn pressed');
    audioYellow.play();
    setTimeout(() => yellowSelect.removeAttribute ('class'), 500);
    setTimeout(() => yellowSelect.setAttribute("class", "btn yellow"), 500);
};

function playBlue() {
    blueSelect.setAttribute ('class', 'btn pressed');
    audioBlue.play();
    setTimeout(() => blueSelect.removeAttribute ('class'), 500);
    setTimeout(() => blueSelect.setAttribute("class", "btn blue"), 500);
}
function startGame() {
    document.querySelector('.container').style.display = "block";
    document.getElementById('start').style.display = "none";
    
    chosenColor = Math.floor(Math.random() * 4) + 1;
    console.log(chosenColor);
    correctSequence.push(chosenColor);
    let firstSequence = setTimeout(function() { 
        if (correctSequence[0] == green) {
            playGreen();
        } else if (correctSequence[0] == red) {
            playRed();
        } else if (correctSequence[0] == yellow) {
            playYellow();
        } else if (correctSequence[0] == blue) {
            playBlue();
        }
    }, 3000);
    firstSequence;
}