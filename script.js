console.log("Hello World");
// This activity was supposed to be done with JQuery but I decided to try it with vanilla javascript. The solution from the course with JQuery was available but I did not watch or look into the code. I tried to solve it and researched some of the problems I encountered.

let chosenColor; 
let playerAnswer = [];
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

// Lists of functions when a specifc color gets pressed
let greenSet = {
    playGreen: function () {
        greenSelect.setAttribute ("class", "btn pressed");
        audioGreen.play();
        setTimeout(() => greenSelect.removeAttribute ('class'), 150);
        setTimeout(() => greenSelect.setAttribute("class", "btn green"), 150);
        return green;
    }
};

let redSet = {
    playRed: function () {
        redSelect.setAttribute ('class', 'btn pressed');
        audioRed.play();
        setTimeout(() => redSelect.removeAttribute ('class'), 150);
        setTimeout(() => redSelect.setAttribute("class", "btn red"), 150);
        return red;
    }
};

let yellowSet = {
    playYellow: function () {
        yellowSelect.setAttribute ('class', 'btn pressed');
        audioYellow.play();
        setTimeout(() => yellowSelect.removeAttribute ('class'), 150);
        setTimeout(() => yellowSelect.setAttribute("class", "btn yellow"), 150);
        return yellow;
    }
};

let blueSet = {
    playBlue: function () {
        blueSelect.setAttribute ('class', 'btn pressed');
        audioBlue.play();
        setTimeout(() => blueSelect.removeAttribute ('class'), 150);
        setTimeout(() => blueSelect.setAttribute("class", "btn blue"), 150);
        return blue;
    }
};

// Sleep setting ONLY works for async functions, user can input, while function waits. Takes seconds but will be multiplied with milliseconds for proper seconds output
const sleep = (delaySeconds) => new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000))

// Starts Game
let startGame = async () => {
    document.querySelector('.container').style.display = "block";
    document.getElementById('start').style.display = "none";
    document.getElementById('level-title').style.display = "none";
    document.getElementById('level-lose').style.color = "#FEF2BF";
    playerAnswer.length = 0;
    correctSequence.length = 0;

    for (let i = 0; i <= 25; i++) {
        console.log(i);
        
        // shows level or iteration of sequence   
        document.getElementById('level-lose').textContent = `Level ${i+1}`;

        // will roll for random number + 1 then insert to an array
        chosenColor = Math.floor(Math.random() * 4) + 1;
        correctSequence.push(chosenColor);
        console.log(correctSequence);

        // resets player's array where buttons pressed are stored
        playerAnswer.length = 0;
        console.log(playerAnswer);

        await sleep(1);
        if (correctSequence[i] == green) {
            greenSet.playGreen();
        } else if (correctSequence[i] == red) {
            redSet.playRed();
        } else if (correctSequence[i] == yellow) {
            yellowSet.playYellow();
        } else if (correctSequence[i] == blue) {
            blueSet.playBlue();
        };

        document.querySelector('.timer-bar').style.animationName = "growCounter";

        greenSelect.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            greenSet.playGreen();
            playerAnswer.push(green);
        });

        redSelect.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            redSet.playRed();
            playerAnswer.push(red);
        });

        yellowSelect.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            yellowSet.playYellow();
            playerAnswer.push(yellow);
        }); 

        blueSelect.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            blueSet.playBlue();
            playerAnswer.push(blue);
        });

        // Will listen for key press and do its corresponding function
        document.addEventListener('keydown', function(event) {
            event.stopImmediatePropagation();
            if (event.key == 'w') {
                greenSet.playGreen();
                playerAnswer.push(green);
            } else if (event.key == 'a') {
                redSet.playRed();
                playerAnswer.push(red);
            } else if (event.key == 's') {
                yellowSet.playYellow();
                playerAnswer.push(yellow);
            } else if (event.key == 'd') {
                blueSet.playBlue();
                playerAnswer.push(blue);
            }
        });

        console.log(playerAnswer);
        // Checks level and decreases sleep timer as well as countdown and growCounter duration
        let counterTime = (i) => {
            if (i+1 > 0 && i < 5) {
                return counterTime = 20;
            } else if (i >= 5 && i < 10) {
                return counterTime = 15;
            } else if (i >= 10 && i <= 15) {
                return counterTime = 10;
            } else if (i > 15) {
                return counterTime = 5;
            }
        };
        console.log(counterTime(i))

        await sleep(counterTime);
        document.querySelector('.timer-bar').style.animationName = "";
        document.querySelector('.timer-bar').style.animationDuration = "counterTime()";
        console.log(playerAnswer);
        console.log(correctSequence.toString());
        console.log(playerAnswer.toString())

        // If statement will check both arrays in strings and see if will loop again or show player GameOver with level reached in i+1
        if (correctSequence.toString() != playerAnswer.toString()) {
            document.querySelector('.container').style.display = "none";
            document.getElementById('start').style.display = "block";
            document.getElementById('level-title').style.display = "block";
            document.getElementById('level-lose').style.color = "#f70505";
            document.getElementById('level-lose').textContent = `Game Over! You reached Level ${i+1}!`;
            break;
        } else if (correctSequence.toString() === playerAnswer.toString() && i === 25) {
            document.querySelector('.container').style.display = "none";
            document.getElementById('start').style.display = "block";
            document.getElementById('level-title').style.display = "block";
            document.getElementById('level-lose').style.color = "#f70505";
            document.getElementById('level-lose').textContent = `You completed the Game! You reached Level ${i+1}!`;
            break;
        } else { () => {
            return playerAnswer.forEach(playerAnswer.pop())};
        };
    };
};