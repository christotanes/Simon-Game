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
        setTimeout(() => greenSelect.removeAttribute ('class'), 500);
        setTimeout(() => greenSelect.setAttribute("class", "btn green"), 500);
        return green;
    }
};

let redSet = {
    playRed: function () {
        redSelect.setAttribute ('class', 'btn pressed');
        audioRed.play();
        setTimeout(() => redSelect.removeAttribute ('class'), 500);
        setTimeout(() => redSelect.setAttribute("class", "btn red"), 500);
        return red;
    }
};

let yellowSet = {
    playYellow: function () {
        yellowSelect.setAttribute ('class', 'btn pressed');
        audioYellow.play();
        setTimeout(() => yellowSelect.removeAttribute ('class'), 500);
        setTimeout(() => yellowSelect.setAttribute("class", "btn yellow"), 500);
        return yellow;
    }
};

let blueSet = {
    playBlue: function () {
        blueSelect.setAttribute ('class', 'btn pressed');
        audioBlue.play();
        setTimeout(() => blueSelect.removeAttribute ('class'), 500);
        setTimeout(() => blueSelect.setAttribute("class", "btn blue"), 500);
        return blue;
    }
};

// Sleep setting ONLY works for async functions, user can input, while function waits
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

// Starts Game
let startGame = async () => {
    document.querySelector('.container').style.display = "block";
    document.getElementById('start').style.display = "none";
    
    for (let i = 0; i < 50; i++) {
        console.log(i);
        chosenColor = Math.floor(Math.random() * 4) + 1;
        correctSequence.push(chosenColor);
        console.log(correctSequence);
        playerAnswer.length = 0;
        console.log(playerAnswer)

        await sleep(2);
        if (correctSequence[i] == green) {
            greenSet.playGreen();
        } else if (correctSequence[i] == red) {
            redSet.playRed();
        } else if (correctSequence[i] == yellow) {
            yellowSet.playYellow();
        } else if (correctSequence[i] == blue) {
            blueSet.playBlue();
        }

        greenSelect.addEventListener("click", () => {
            event.stopImmediatePropagation();
            greenSet.playGreen();
            playerAnswer.push(green);
        });

        redSelect.addEventListener("click", () => {
            event.stopImmediatePropagation();
            redSet.playRed();
            playerAnswer.push(red);
        });

        yellowSelect.addEventListener("click", () => {
            event.stopImmediatePropagation();
            yellowSet.playYellow();
            playerAnswer.push(yellow);
        }); 

        blueSelect.addEventListener("click", () => {
            event.stopImmediatePropagation();
            blueSet.playBlue();
            playerAnswer.push(blue);
        });
        console.log(playerAnswer);

        await sleep(5);
        console.log(playerAnswer);
        console.log(correctSequence.toString());
        console.log(playerAnswer.toString())
        if (correctSequence.toString() != playerAnswer.toString()) {
            console.log("Game Over");
            break;
        } else { () => {
            return playerAnswer.forEach(playerAnswer.pop())};
        };
    }
};
// playerAnswer.push(answer);
// console.log(playerAnswer.toString());
// console.log(correctSequence.toString())