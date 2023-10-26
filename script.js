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
    containerSelect.style.display = "block";
    startSelect.style.display = "none";
    titleSelect.style.display = "none";
    levelLoseSelect.style.color = "#FEF2BF";
    document.getElementById('instruction').style.display = "none";
    playerAnswer.length = 0;
    correctSequence.length = 0;

    for (let i = 0; i <= 25; i++) {
        console.log(i);
        
        // shows level or iteration of sequence   
        levelLoseSelect.textContent = `Level ${i+1}`;

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

        timerBarSelect.style.animationName = "growCounter";

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

        timerBarSelect.style.animationName = "";
        timerBarSelect.style.animationDuration = "counterTime()";
        console.log(playerAnswer);
        console.log(correctSequence.toString());
        console.log(playerAnswer.toString())

        // If statement will check both arrays in strings and see if will loop again or show player GameOver with level reached in i+1
        if (correctSequence.toString() != playerAnswer.toString()) {
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
            containerSelect.style.display = "none";
            document.querySelector('.instruction-size').style.display = "none";
            startSelect.style.display = "block";
            titleSelect.style.display = "block";
            document.getElementById('instruction').style.display = "block";
            levelLoseSelect.style.color = "#f70505";
            levelLoseSelect.textContent = `You completed the Game! You reached Level ${i+1}!`;
            break;
        } else { () => {
            return playerAnswer.forEach(playerAnswer.pop())};
        };
    };
};

var unmute = document.getElementById('start');
unmute.addEventListener('click', unlock());

function unlock() {
  console.log("unlocking")
  // create empty buffer and play it
  var buffer = context.createBuffer(1, 1, 22050);
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);

  // play the file. noteOn is the older version of start()
  source.start ? source.start(0) : source.noteOn(0);

  // by checking the play state after some time, we know if we're really unlocked
  setTimeout(function() {
    if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
      // Hide the unmute button if the context is unlocked.
      unmute.style.display = "none";
    }
  }, 0)
};