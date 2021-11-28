let playerScore = 0;
let pcScore = 0;
let playerChoice = "Rock";

function getPCChoice () {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: 
            return "Rock";
        case 1: 
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

// Console.log(pcChoice); this will check what value the computer has chosen

function play(playerSelection, pcSelection) {
    switch (playerSelection) {
        case "Rock":
            switch (pcSelection) {
                case "Rock":
                    return "There is a tie.";
                case "Paper":
                    pcScore++;
                    return "You lose! Paper beats rock";
                case "Scissors":
                    playerScore++;
                    return "You Win! Rock beats Scissors";
            }
        case "Paper":
            switch (pcSelection) {
                case "Rock":
                    playerScore++;
                    return "You Win! Paper beats Rock";
                case "Paper":
                    return "There is a tie.";
                case "Scissors":
                    pcScore++;
                    return "You Lose! Scissors beat Paper";
            }
        case "Scissors":
            switch (pcSelection) {
                case "Rock":
                    pcScore++;
                    return "You Lose! Rock beats Scissors"
                case "Paper":
                    playerScore++;
                    return "You Win! Scissors beat Paper"
                case "Scissors":
                    return "There is a tie.";
            }
            
    }
}

function game () {
    playerScore = 0;
    pcScore = 0;
    let result = "";
    while(playerScore < 5 || pcScore < 5) {
        pcChoice = getPCChoice();
        let temp = prompt("Rock, Paper, or Scissors?");
        let firstLetter = temp.charAt(0).toUpperCase();
        let rest = temp.substring(1);
        playerChoice = firstLetter + rest;
        result = play(playerChoice, pcChoice);
        alert(result);
        alert("You have " + playerScore + " points and the computer has " + pcScore + " points.");
    }
    if (playerScore > pcScore) {
        alert("You Win!!!");
    } else {
        alert("You Lose...");
    }
}

function loopGame () {
    let wantsToPlay = false;
    let choice = prompt("Would you like to play a game of rock, paper, scissors? Enter Yes if you would like to and no if you don't want too").toLowerCase();
    if (choice == "yes") {
        wantsToPlay = true;
    }
    while (wantsToPlay) {
        game();
        choice = prompt("Would you like to restart? Enter Yes if you would like to, and no if you don't want too").toLowerCase();
        if (choice == "no") {
            wantsToPlay = false;
        }

    }
}

loopGame();