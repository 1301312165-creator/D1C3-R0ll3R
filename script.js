console.log("Dice Roller script loaded.");
let rollButton = document.getElementById("rollButton");
let resultDisplay = document.getElementById("result");

// Add event listener to the button
rollButton.addEventListener("click", rollDice);

function rollDice() {
    // Generate a random number between 1 and 6
    let diceResult = Math.floor(Math.random() * 6) + 1;
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    dice1Display.innertext = die1;
    dice2Display.innertext = die2;
    toalDisplay.innertext = "Total: " + total;

    // Display the result
    resultDisplay.textContent = `You rolled a ${diceResult}!`;
    
}

