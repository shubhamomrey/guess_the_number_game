let random = Math.floor(Math.random() * 100) + 1;
let correct = false;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;

    if (userGuess === random) {
        document.getElementById("message").textContent = "You guessed the right number!";
        document.getElementById("score").textContent = "Your score is: " + (100 - attempts);
        correct = true;
    } else if (userGuess < random) {
        document.getElementById("message").textContent = "You guessed a lesser number.";
    } else {
        document.getElementById("message").textContent = "You guessed a greater number.";
    }

    document.getElementById("attempts").textContent = "Attempts: " + attempts;
}


