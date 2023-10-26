console.log("Hello World");
// This activity was supposed to be done with JQuery but I decided to try it with vanilla javascript. The solution from the course with JQuery was available but I did not watch or look into the code. I tried to solve it and researched some of the problems I encountered.

let chosenColor, 
    playerAnswer = [], 
    correctSequence = [];
const green = 1, 
    red = 2, 
    yellow = 3, 
    blue = 4, 
    greenSelect = document.getElementById('green'), 
    redSelect = document.getElementById('red'), 
    yellowSelect = document.getElementById('yellow'), 
    blueSelect = document.getElementById('blue'), 
    audioGreen = new Audio ('./sounds/green.mp3'), 
    audioRed = new Audio ('./sounds/red.mp3'), 
    audioYellow = new Audio ('./sounds/yellow.mp3'), 
    audioBlue = new Audio ('./sounds/blue.mp3'), 
    audioWrong = new Audio ('./sounds/wrong.mp3'),
    audioCorrect = new Audio('./sounds/correct.mp3'),
    titleSelect = document.getElementById('level-title'),
    containerSelect = document.querySelector('.container'),
    startSelect = document.getElementById('start'),
    levelLoseSelect = document.getElementById('level-lose'),
    timerBarSelect = document.querySelector('.timer-bar'),
    infoSelect = document.querySelector('.info');

// code to allow audio to play on iOS without user interaction
const soundEffect = new Audio();
soundEffect.autoplay = true;
soundEffect.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
    
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
const sleep = (delaySeconds) => new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));

// Starts Game
let startGame = async () => {
    containerSelect.style.display = "block";
    startSelect.style.display = "none";
    titleSelect.style.display = "none";
    levelLoseSelect.style.color = "#FEF2BF";
    document.getElementById('instruction').style.display = "none";
    greenSet.muted = !greenSet.muted;
    redSet.muted = !redSet.muted;
    yellowSet.muted = !yellowSet.muted;
    blueSet.muted = !blueSet.muted;
    playerAnswer.length = 0;
    correctSequence.length = 0;

    for (let i = 0; i <= 25; i++) {
        // Checks level and decreases sleep timer as well as countdown and growCounter duration
        let counterTime = 0, 
            earlyCounter = 0,
            countdown = 0;
        if (i+1 > 0 && i < 3) {
            countdown = 20;
            counterTime = 16;
            earlyCounter = 4;
        } else if (i >= 3 && i < 5) {
            countdown = 20;
            counterTime = 14;
            earlyCounter = 6;
        } else if (i >= 5 && i < 10) {
            countdown = 15;
            counterTime = 8;
            earlyCounter = 7;
        } else if (i >= 10 && i <= 15) {
            countdown = 10;
            counterTime = 2;
            earlyCounter = 8;
        } else if (i > 15) {
            countdown = 5;
            counterTime = 1;
            earlyCounter = 4;
        };
        console.log(i);
        
        // shows level or iteration of sequence   
        levelLoseSelect.textContent = `Level ${i+1}`;

        // will roll for random number + 1 then insert to an array
        chosenColor = Math.floor(Math.random() * 4) + 1;
        correctSequence.push(chosenColor);
        console.log(correctSequence);

        // resets player's array where buttons pressed are stored
        playerAnswer.length = 0;
        // console.log(playerAnswer);
          
        await sleep(1);
        if (correctSequence[i] == green) {
            // greenSet.playGreen();
            soundEffect.src = "./sounds/green.mp3";
        } else if (correctSequence[i] == red) {
            // redSet.playRed();
            soundEffect.src = "./sounds/red.mp3";
        } else if (correctSequence[i] == yellow) {
            // yellowSet.playYellow();
            soundEffect.src = "./sounds/yellow.mp3";
        } else if (correctSequence[i] == blue) {
            // blueSet.playBlue();
            soundEffect.src = "./sounds/blue.mp3";
        };

        let myInterval = setInterval(function countdownTimer() {
            countdown -= 1;
            document.querySelector('.timer-text').textContent = countdown;
            console.log(countdown);
        }, 1000);
        
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
        // Commented out to test scroll responsiveness
        // document.addEventListener('keydown', function(event) {
        //     event.stopImmediatePropagation();
        //     if (event.key == 'w') {
        //         greenSet.playGreen();
        //         playerAnswer.push(green);
        //     } else if (event.key == 'a') {
        //         redSet.playRed();
        //         playerAnswer.push(red);
        //     } else if (event.key == 's') {
        //         yellowSet.playYellow();
        //         playerAnswer.push(yellow);
        //     } else if (event.key == 'd') {
        //         blueSet.playBlue();
        //         playerAnswer.push(blue);
        //     }
        // });

        timerBarSelect.style.animationName = "growCounter";
        timerBarSelect.style.animationDuration = "countdown";
        console.log(correctSequence);
        console.log(counterTime);

        await sleep(earlyCounter);
        if (playerAnswer.length != i+1 && playerAnswer.length != 0 && correctSequence.toString() === playerAnswer.toString()){
            clearInterval(myInterval);
            audioCorrect.play();
            console.log(playerAnswer);
            timerBarSelect.style.animationName = "";
            continue;
        } else if (correctSequence.toString() === playerAnswer.toString()) {
            clearInterval(myInterval);
            audioCorrect.play();
            console.log(playerAnswer);
            timerBarSelect.style.animationName = "";
            continue;
        } else if (playerAnswer.length == 0){
            console.log("Must continue");
        } else if (correctSequence.toString() != playerAnswer.toString()) {
            clearInterval(myInterval);
            audioWrong.play();
            console.log(playerAnswer);
            containerSelect.style.display = "none";
            document.querySelector('.instruction-size').style.display = "none";
            startSelect.style.display = "block";
            titleSelect.style.display = "block";
            document.getElementById('instruction').style.display = "block";
            levelLoseSelect.style.color = "#f70505";
            levelLoseSelect.textContent = `Game Over! You reached Level ${i+1}!`;
            break;
        } else {
            console.log("must continue");
        };

        await sleep(counterTime);
        timerBarSelect.style.animationName = "";
        console.log(playerAnswer);
        console.log(correctSequence.toString());
        console.log(playerAnswer.toString());

        // If statement will check both arrays in strings and see if will loop again or show player GameOver with level reached in i+1
        if (correctSequence.toString() != playerAnswer.toString()) {
            clearInterval(myInterval);
            audioWrong.play();
            containerSelect.style.display = "none";
            document.querySelector('.instruction-size').style.display = "none";
            startSelect.style.display = "block";
            titleSelect.style.display = "block";
            document.getElementById('instruction').style.display = "block";
            levelLoseSelect.style.color = "#f70505";
            levelLoseSelect.textContent = `Game Over! You reached Level ${i+1}!`;
            break;
        } else if (correctSequence.toString() === playerAnswer.toString() && i === 25) {
            clearInterval(myInterval);
            containerSelect.style.display = "none";
            document.querySelector('.instruction-size').style.display = "none";
            startSelect.style.display = "block";
            titleSelect.style.display = "block";
            document.getElementById('instruction').style.display = "block";
            levelLoseSelect.style.color = "#f70505";
            levelLoseSelect.textContent = `You completed the Game! You reached Level ${i+1}!`;
            break;
        } else { () => {
            clearInterval(myInterval);
            return playerAnswer.forEach(playerAnswer.pop())};
        };
    };
}