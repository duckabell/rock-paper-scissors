
/* 
Build a function called computerPlay that will randomly return either rock paper or scissors. We'll use this function in the game to make the computer play

First, find the random numbers  between 1 and 3.
Then if number is 1, return 'rock' if number is two return 'scissors' and else return 3.
In the console log return the results.

If I call game 5 times the whole thing runs five times. So I need to set a function that just plays and then somehow add the score outside of that function.
 */
function game() {   

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    
    function randomNumber(min, max)
    {
     min = Math.ceil(min);
     max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    let numberResult = randomNumber(1,3);
    
    /* This randomly returns a number between 1 and 3 */
    
    function computerPlay(numberResult)
    {
     if (numberResult === 1) {
         return paper;
        
     } else if (numberResult === 2) {
         return rock;
     } else {
         return scissors;
     }
    }
    
    
    function askMove() {
        return prompt("What's your move?").toLowerCase();
    }
    
    let playerChoice = askMove();
    
    
    /* The functin playerPlay checks if the player's choice is valid. */
    function playerPlay(){
        if (playerChoice === rock || playerChoice === scissors || playerChoice === paper) {
        return playerChoice; 
    } else {
        alert("That is not a valid selection");
    }
    }
    
    /* The two constants playerSelection and playerChoice are the results of playerChoice and computerPlay */
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    
    
    /* This plays 1 round of rock paper scissors using the const playerSelection and computerSelection */
    
    function playHand(playerSelection, computerSelection) {
    
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats scissors!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats rock!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
              return "You Lose! Rock beats scissors!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You Win! Scissors beats paper!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors beats paper!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats rock!"
        }
        else {
            return "It's a tie. There are no winners.";
        }
    }
    
    /* This returns the player's Score from 1 round. */
    
    let playerScore = 0;
    let computerScore = 0;
    
    function playerScoring(playerSelection,computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
           return playerScore = playerScore + 1;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
           return playerScore;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return playerScore;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
           return playerScore = playerScore + 1;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return playerScore;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
           return playerScore = playerScore + 1;
        }
        else {
            return playerScore;
        }
    
    }
    /* This returns the computer's score from 1 round. */
    
    function computerScoring(playerSelection,computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
           return computerScore;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
           return computerScore + 1;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return computerScore + 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
           return computerScore;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return computerScore + 1;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
           return computerScore;
        }
        else {
            return computerScore;
        }
    
    }
    
    /* I created the playerNewScore and computerNewScore to try to figure out how to incrementally add the score. However, that didn't quite work. */
    let playerNewScore = playerScoring(playerSelection,computerSelection);
    let computerNewScore = computerScoring(playerSelection,computerSelection);
    
    let selectionMessage = "Player chooses " + playerSelection + " and computer chooses " + computerSelection + ".";
    let scoringMessage = "Player score is " + playerNewScore + " and computer score is " + computerNewScore + ".";
    
    
    
    
    console.log(selectionMessage);
    console.log(playHand(playerSelection, computerSelection));
    console.log(scoringMessage);
    
    }
    game();
    game();
    game();
    game();
    game();
    
    
    
     
    
    /* it's good form when you're trying to call a result of a function to call it with a new constant and then use that constant in your function? */
    
    