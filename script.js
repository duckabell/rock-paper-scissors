
/* 
Build a function called computerPlay that will randomly return either rock paper or scissors. We'll use this function in the game to make the computer play

First, find the random numbers  between 1 and 3.
Then if number is 1, return 'rock' if number is two return 'scissors' and else return 3.
In the console log return the results.
 */
function randomNumber(min, max)
{
 min = Math.ceil(min);
 max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let numberResult = randomNumber(1,3);


function computerPlay()
{
 if (numberResult === 1) {
     return "paper";
    
 } else if (numberResult === 2) {
     return "rock";
 } else {
     return "scissors";
 }

}



     
function playRound(playerSelection, computerSelection) {
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

let playerPrompt = prompt("What's your move?")
let playerPlay = playerPrompt.toLowerCase();
const playerSelection = playerPlay;
const computerSelection = computerPlay();
let selectionMessage = "Player chooses " + playerSelection + " and computer chooses " + computerSelection + ".";


console.log(selectionMessage);
console.log(playRound(playerSelection, computerSelection));



/* it's good form when you're trying to call a result of a function to call it with a new constant and then use that constant in your function? */

/* Now that the computer has a result, we're going to let the player have a result */


/* let playerPrompt = prompt("Player, what do you choose?");
let playerSelection = playerPrompt.toLowerCase();

console.log(playerSelection);
console.log(computerMessage); */





/*  


let winningMessage = playRound();
console.log(winningMessage);
*/

/*  

Step 2.
Create a parameter called playerSelection. Duplicate the computerPlay second half of code (don't need to randomly generate it), but use a prompt instead to pull the answer.

Create a parameter called computerSelection - this should be the variable result.


*/