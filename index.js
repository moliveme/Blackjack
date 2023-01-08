// a card is from 2-11

// arrays can have mixed data types!
let cards = [] // ordered list/array

let sum = 0
let cardsStr = ""
let hasWon = false
let isAlive = false

let message = ""

let messageL = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsel = document.getElementById("cards-el")

function startGame() {

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards.push(firstCard)
    cards.push(secondCard) 

    renderGame()
}

function renderGame() {

    if (sum < 21) {
        message = "draw new card?"
        console.log(message)
    } else if (sum === 21) {
        message = "won!"
        console.log(message)
        hasWon = true
        cards = []
        renderGame()
    } else {
        message = "lost :("
        console.log(message)
        isAlive = false
        cards = []
        renderGame()
    }
    
    messageL.textContent = message

    if (cards.length != 0) {

        sum = cards.reduce((a, b) => (a + b))
        sumEl.textContent = "Sum: " + sum

        cardsStr = cards.reduce((a, b) => (a + " " + b + " "))
        
    } else {

        sumEl.textContent = "Sum: "
        cardsStr = " "
    }

    cardsel.textContent = "Cards: " + cardsStr

    if (hasWon === true) {
    
    }
}

function newCard() {

    if (isAlive) {

        newCardNum = getRandomCard()
        cards.push(newCardNum)

        renderGame()

    }

}

function getRandomCard() {

    // so a regular deck has 1-13 cards
    // but in blackjack, ace is a 11 or 1 (player can choose)
    // for simplicity, we'll take ace as 11
    // the last 3 cards are all a 10!
    // so effective range becomes 2-11
    // but, you cant do 2 + 9 * random() because then every number
    // ...between 2-11 has an equal chance of being chosen
    // so you'll need to do in range 2-13
    // ...and if jack/queen/king (11,12,13) is hit, make it a 10
    // ...and if ace (1) is hit, make it a 11
    
    let randomCard = Math.floor(1 + 13 * (Math.random()))
    
    if (randomCard <= 13 && randomCard >= 11) {
        randomCard = 10
    }

    if (randomCard === 1) {
        randomCard = 11
    }

    return randomCard
}