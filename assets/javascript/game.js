console.log("TEST");



<script type="text/javascript">
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesLettersSoFar = []

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        document.onkey = function (event) {
            var userGuess = string.fromCharCode(event.keycode).toLowerCase();
    var computerGuess = computerChoices[math.floor(math.random() * computerChoices.length)];
    guessesSoFar.push(userguess);

            if (userGuess === computerGuess) {
        wins++;
    alert("you won!");
    guessesLeft = 9;
    guessesSoFar.length = 0;
}

            else if (guessesLeft === 0) {
        losses++;
    alert("you didnt win...you suck");
    guessesLeft = 9;
    gussesSoFar.length = 0;
}

            else if (userGuess !== computerGuess) {
        guessesLeft--;
    }


            var html = "<h1>The Psychic Game</h1>" +
                "<p>Guess what letter I'm thinking of!</p>" +
                "<p>Total Wins: " +
    wins +
                "</p>" +
                "<p>Total Losses: " +
    losses +
                "</p>" +
                "<p>Guesses Left: " +
    guessesLeft +
                "</p>" +
                "<p>Your Guesses so far: " +
    guessesSoFar +
                "</p>"
}









