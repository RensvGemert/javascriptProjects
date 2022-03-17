let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");

let button = document.getElementById("button-el");

let player = {
    name: "Player",
    cash: 200,
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.cash;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } 
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {   
    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        disableStartGameButton();
    } else if (sum === 21) {
        message = "Congrats! You've got BlackJack! you won $30";
        hasBlackJack = true;
        incrementCash();
        enableStartGameButton();
    } else {
        message = "You're out of the game, you've lost $10";
        isAlive = false;
        decreaseCash();
        enableStartGameButton();
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    } else {
        message = "You're out of the game";
    }
}

function incrementCash() {
    player.cash += 30;
    playerEl.textContent = player.name + ": $" + player.cash;  
}

function decreaseCash() {
    player.cash -= 10;
    playerEl.textContent = player.name + ": $" + player.cash;
}

function enableStartGameButton() {
    button.removeAttribute("disabled", "disabled");
}

function disableStartGameButton() {
    button.setAttribute("disabled", "disabled");
}