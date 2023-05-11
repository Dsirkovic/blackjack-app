let player = {
    name: "Player",
    chips: 2000,
    sayHello: function() {
        console.log("Hello!")
    }
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let hasCollectedWinnings = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

playerEl = document.getElementById("player-el")

playerEl.innerText = player.name + ": " + player.chips + " $" 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    hasBlackJack = false
    isAlive = true
    hasCollectedWinnings = false
    document.getElementById("winBtn").disabled = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}
    sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function bet() {
    if (player.chips >= 100) {
        player.chips -= 100
        playerEl.innerText = player.name + ": " + player.chips + " $"
    } else alert("You don't have enough chips to play! Refresh the page to magically gain 2000 more")
}

function win() {
    if (isAlive === true && hasBlackJack === true && hasCollectedWinnings === false) {
        player.chips += 1000
        playerEl.innerText = player.name + ": " + player.chips + " $"
        document.getElementById("winBtn").disabled = true;
        hasCollectedWinnings = true
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}



