// Website interaction 

let message = document.getElementById("message");
let score = document.getElementById("score");
let rollButton = document.getElementById("rollButton");
let holdButton = document.getElementById("holdButton");
let image = document.getElementById("image");
let tally = 0;

// Game functions

const genNum = () => {
    return Math.floor((Math.random() * 6) + 1);
};

const roll = () => {
    console.log(`Your current score is ${tally}`);
    let newNum = genNum();
    image.src = `./img/dice${newNum}.png`;
    console.log(`You rolled a ${newNum}`);
    if (newNum == 1) {
        tally = 0;
        score.textContent = tally;
        message.textContent = "You lose!";
        button.textContent = "start again";
        console.log('Sorry, you lose!');
    } else {
        tally = tally + newNum;
        score.textContent = tally;
        if (tally >= 20) {
            message.textContent = "You win!";
            button.textContent = "start again";
            console.log(`Score: ${tally}. You win!`);
        } else {
        console.log(`Your score is ${tally}. Roll again?`);
        }
    }
};

button.addEventListener("click", () => {
    if (button.textContent == "start again") {
        tally = 0;
        message.textContent = "Player 1";
        score.textContent = tally;
        button.textContent = "roll"
        image.src = "";
    } else {
        roll();
    }
});

