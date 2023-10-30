console.log("Hello World");
// This is the activity based on the instructions guideline.
 
let playerAnswer = [], 
    correctSequence = [],
    level = 1;

const color = ['green', 'red', 'yellow', 'blue'],
    greenSelect = document.getElementById('green'), 
    redSelect = document.getElementById('red'), 
    yellowSelect = document.getElementById('yellow'), 
    blueSelect = document.getElementById('blue'), 
    titleSelect = document.getElementById('level-title'),
    containerSelect = document.querySelector('.container'),
    startSelect = document.getElementById('start'),
    levelLoseSelect = document.getElementById('level-lose'),
    timerBarSelect = document.querySelector('.timer-bar'),
    infoSelect = document.querySelector('.info');
    
// Will show description
infoSelect.addEventListener('click', () => {
    document.querySelector('.description').style.display = "block";
    document.querySelector('.description').style.animationName = "slideFromLeft";
});
// And hide description
document.querySelector('.description').addEventListener('click', () => {
    document.querySelector('.description').style.animationName = "disappear";
    setTimeout(() => document.querySelector('.description').style.display = "none", 1400);
    
});

function gameOver() {
    correctSequence.length = 0;
    document.querySelector('body').setAttribute ('class', 'game-over');
    setTimeout(() =>document.querySelector('body').removeAttribute ('class'), 100);
    const audioWrong = new Audio('./sounds/wrong.mp3');
    audioWrong.play();
    containerSelect.style.display = "none";
    startSelect.style.display = "block";
    titleSelect.style.display = "block";
    document.getElementById("instruction").style.display = "block";
    document.getElementById("link").style.display = "block";
    levelLoseSelect.style.color = "#f70505";
    levelLoseSelect.textContent = `Game Over! You reached Level ${level}!`;
};

function playColor(color) {
    playAudio = new Audio("./sounds/" + color + ".mp3");
    playAudio.play();
};

let simonAllShow = () => {
    levelLoseSelect.textContent = "Remember Follow Simon!"
    document.getElementById(`greenSimon`).textContent = "🙋‍♂️";
    document.getElementById(`redSimon`).textContent = "🙋‍♂️";
    document.getElementById(`yellowSimon`).textContent = "🙋‍♂️";
    document.getElementById(`blueSimon`).textContent = "🙋‍♂️";
    setTimeout(() => document.getElementById(`greenSimon`).textContent = "", 1000);
    setTimeout(() => document.getElementById(`redSimon`).textContent = "", 1000);
    setTimeout(() => document.getElementById(`yellowSimon`).textContent = "", 1000);
    setTimeout(() => document.getElementById(`blueSimon`).textContent = "", 1000);
    setTimeout(() => document.getElementById(`instruction`).style.display = "none", 1000);
};

let simonPlays = (simonColor) => {
    document.getElementById(`${simonColor}`).setAttribute ('class', 'btn pressed');
    document.getElementById(`${simonColor}Simon`).textContent = "🙋‍♂️";
    playColor(simonColor);
    setTimeout(() => document.getElementById(`${simonColor}`).removeAttribute ('class', 'pressed'), 200);
    setTimeout(() => document.getElementById(`${simonColor}`).setAttribute("class", `btn ${simonColor}`), 200);
    setTimeout(() => document.getElementById(`${simonColor}Simon`).textContent = "", 300);
    correctSequence.push(simonColor);
};

let playerPlays = (playerColor) => {
    document.getElementById(`${playerColor}`).setAttribute ('class', 'btn pressed');
    playColor(playerColor);
    setTimeout(() => document.getElementById(`${playerColor}`).removeAttribute ('class', 'pressed'), 200);
    setTimeout(() => document.getElementById(`${playerColor}`).setAttribute("class", `btn ${playerColor}`), 200);
    playerAnswer.push(playerColor);
    checkAnswer();
};

function nextSequence() {
    levelLoseSelect.textContent = `Level ${level}`;
    playerAnswer.length = 0;
    // will roll for random number + 1 then insert to an array
    let randomNumber = Math.floor(Math.random() * 4);
    let simonColor = color[randomNumber];
    if (randomNumber == 0) {
        simonPlays(simonColor);
    } else if (randomNumber == 1){
        simonPlays(simonColor);
    } else if (randomNumber == 2){
        simonPlays(simonColor);
    } else if (randomNumber == 3){
        simonPlays(simonColor);
    };
};

greenSelect.addEventListener('click', (e) => {
    let playerColor = e.target.id;
    playerPlays(playerColor);
});

redSelect.addEventListener('click', (e) => {
    let playerColor = e.target.id;
    playerPlays(playerColor);
});

yellowSelect.addEventListener('click', (e) => {
    let playerColor = e.target.id;
    playerPlays(playerColor);
});

blueSelect.addEventListener('click', (e) => {
    let playerColor = e.target.id;
    playerPlays(playerColor);
});

let restart = () => {
    const audioCorrect = new Audio('./sounds/correct.mp3');
    audioCorrect.play();
    setTimeout(nextSequence, 1000)
};

function checkAnswer() {
    let answer = playerAnswer[playerAnswer.length-1] === correctSequence[playerAnswer.length-1];
    // console.log(answer)
    if (answer != true) {
        gameOver();
    } else if (answer == true && playerAnswer.length == correctSequence.length) {
        restart();
        // console.log(playerAnswer.length);
        // console.log(playerAnswer);
        // console.log(correctSequence);
        level++;
    } else if (answer == true) {
        console.log("continue");
    }
};

startSelect.addEventListener('click', () => {
    level = 1;
    containerSelect.style.display = "block";
    startSelect.style.display = "none";
    titleSelect.style.display = "none";
    levelLoseSelect.style.color = "#FEF2BF";
    levelLoseSelect.style.display = "block";
    document.getElementById("link").style.display = "none";

    simonAllShow();
    setTimeout(nextSequence, 2000);
});