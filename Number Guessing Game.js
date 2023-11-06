var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses= 0;
var guessed_nums = [];




function play() {
    // Get the user's guess from the input field
    var user_guess = document.getElementById("guess").value;

    // Check if the user's guess is outside the valid range (1 to 100)
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        // Add the user's guess to the guessed numbers array
        guessed_nums.push(user_guess);
        // Increment the number of guesses
        no_of_guesses += 1;

        // Check if the user's guess is too low
        if (user_guess < answer) {
            msg1.textContent = "Your guess is too low";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }

           
        // Check if the user's guess is too high
        else if (user_guess > answer) {
            msg1.textContent = "Your guess is too high";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }

           
        // Check if the user's guess is correct
        else if (user_guess == answer) {
            msg1.textContent = "You win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in: " + no_of_guesses + " guesses";

           
            // Disable the "Guess" button to indicate the game is over
            document.getElementById("my_btn").disabled = true;
        }
    }
}

