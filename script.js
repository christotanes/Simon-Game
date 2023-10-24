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
let i = 0;
let playerAnswer = [];

// Lists of functions when a specifc color gets pressed
function playGreen() {
    greenSelect.setAttribute ("class", "btn pressed");
    audioGreen.play();
    setTimeout(() => greenSelect.removeAttribute ('class'), 500);
    setTimeout(() => greenSelect.setAttribute("class", "btn green"), 500);
    return green;
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
};

// Starts Game
function startGame() {
    document.querySelector('.container').style.display = "block";
    document.getElementById('start').style.display = "none";
    
    chosenColor = Math.floor(Math.random() * 4) + 1;
    console.log(chosenColor);
    correctSequence.push(chosenColor);
    let firstSequence = setTimeout(function() { 
        if (correctSequence[0] == green) {
            playGreen();
            i++;
            console.log(i);
        } else if (correctSequence[0] == red) {
            playRed();
            i++;
            console.log(i);
        } else if (correctSequence[0] == yellow) {
            playYellow();
            i++;
            console.log(i);
        } else if (correctSequence[0] == blue) {
            playBlue();
            i++;
            console.log(i);
        }
    }, 3000);
    firstSequence;
    while (i > 0) {
        
        playerAnswer.push(answer);
        console.log(playerAnswer.toString());
        console.log(correctSequence.toString())
        // if (playerAnswer.toString() === correctSequence.toString()) {
    
        // }
    }
}
let greenPlay = {
    playGreen: function () {
        greenSelect.setAttribute ("class", "btn pressed");
        audioGreen.play();
        setTimeout(() => greenSelect.removeAttribute ('class'), 500);
        setTimeout(() => greenSelect.setAttribute("class", "btn green"), 500);
        return green;
    }
}
let answer = greenSelect.addEventListener('click', greenPlay.playGreen);


