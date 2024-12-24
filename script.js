const playerScoreElement = document.querySelector('#player-score');
let playerScore = parseInt(playerScoreElement.textContent);

const botScoreElement = document.querySelector('#bot-score');
let botScore = parseInt(botScoreElement.textContent);

const playerName = prompt('What is your name?');
document.querySelector('#player-name').textContent = playerName;

const botChoiceElement = document.querySelector('#bot-play-choice');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const playerChoice = event.target.textContent;
        const botChoice = getBotChoice();
        botChoiceElement.textContent = botChoice;
        const winner = playHand(playerChoice, botChoice);
        
        if (winner === undefined) {
            return undefined;
        }

        updateScore(winner);

        if (playerScore === 5 || botScore === 5) {
            alertWinner();
            restartGame();
        }
    });
});

function playHand(playerChoice, botChoice) {
    switch (playerChoice) {
        case 'Rock':
            switch (botChoice) {
                case 'Rock':
                    return 'draw';
                case 'Paper':
                    return 'bot';
                case 'Scissor':
                    return 'player';
            }
            return undefined;
        case 'Paper':
            switch (botChoice) {
                case 'Rock':
                    return 'player';
                case 'Paper':
                    return 'draw';
                case 'Scissor':
                    return 'bot';
            }
            return undefined;
        case 'Scissor':
            switch (botChoice) {
                case 'Rock':
                    return 'bot';
                case 'Paper':
                    return 'player';
                case 'Scissor':
                    return 'draw';
            }
            return undefined;
    }
}

function getBotChoice() {
    const num = Math.random() * 3;

    if (num < 1) {
        return 'Rock';
    }
    if (num < 2) {
        return 'Paper';
    }
    return 'Scissor';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    }
    if (winner === 'bot') {
        botScore++;
        botScoreElement.textContent = botScore;
    }
}

function alertWinner() {
    if (playerScore === 5) {
        alert(`${playerName} is the winner!`);  
    } else {
        alert('Bot is the winner!');
    }
}

function restartGame() {
    playerScoreElement.textContent = 0;
    botScoreElement.textContent = 0;
    botChoiceElement.textContent = '';
    playerScore = 0;
    botScore = 0;
}
