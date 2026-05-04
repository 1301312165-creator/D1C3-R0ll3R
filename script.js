console.log("Dice Roller script loaded.");
let rollButton = document.getElementById("rollButton");
let resultDisplay = document.getElementById("result");

// Add event listener to the button
rollButton.addEventListener("click", rollDice);

function rollDice() {
    // Generate a random number between 1 and 6
    let diceResult = Math.floor(Math.random() * 6) + 1;

    // Display the result
    resultDisplay.textContent = `You rolled a ${diceResult}!`;
}
