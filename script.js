console.log("Dice Roller script loaded.");

let rollButton = document.getElementById("rollButton");
let dice1Display = document.getElementById("dice1");
let dice2Display = document.getElementById("dice2");
let totalDisplay = document.getElementById("total");

// Add event listener to the button
rollButton.addEventListener("click", rollDice);

function rollDice() {
    // Generate a random number between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
   
    let total = die1 + die2;
    dice1Display.innerText = die1;
    dice2Display.innerText = die2;
    totalDisplay.innerText = "Total: " + total;

    // Display the result
    resultDisplay.textContent = `You rolled a ${diceResult}!`;
    
}

