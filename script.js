//PSEUDO-CODE

// Ask for the player's move
function playerMove() {

  let isValidMove = true;

  // Force the user to input a valid move

  while (isValidMove) {
    // Should either be 'rock', 'paper' or 'scissors'
    let move = prompt('Choose a move: Rock, Paper, Scissors');

    // Terminate early if player clicks on Cancel button
    if (move === null) {
      return; // Returns undefined, not NULL
    }

    if (move) {
      // Assumed that the user strictly inputs alphabetical text
      // Revise code in case of non-alphabetical input
      move = move.toLowerCase();
      if (move === 'rock' || move === 'paper' || move === 'scissors') {
        return move;
      } else {
        alert('Enter a valid move!')
      }

    }
  }
}

// Pick a random 'move' for the computer
function computerMove() {
  const moves = ['rock', 'scissors', 'paper'];

  let moveNum = Math.floor(Math.random() * 3);
  return moves[moveNum];
}

function playRound(playerSelection, computerSelection) {
  // If the moves are the same, DRAW
  // rocks(W) > scissors
  // scissors(W) > paper
  // paper(W) > scissors
  if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    console.log('You win! Rock beats scissors!');
    playerScore++;
  } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    console.log('You win! Scissors beat paper!');
    playerScore++;
  } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    console.log('You win! Paper beat rock!');
    playerScore++;
  } else if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
    console.log('You lost! Rock beats scissors!');
    computerScore++;
  } else if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
    console.log('You lost! Scissors beat paper!');
    computerScore++;
  } else if ((computerSelection === 'paper') && (playerSelection === 'rock')) {
    console.log('You lost! Paper beats rock!');
    computerScore++;
  } else {
    console.log('DRAW!!!');
  }
}

function game() {

  for (let counter = 1; counter <= 5; counter++) {
    // Store that move to a variable playerSelection
    let playerSelection = playerMove();
    if (playerSelection === undefined) {
      alert('Have a great day!')
      return;
    }

    // Make the computer 'play', store this move to computerSelection
    let computerSelection = computerMove();


    // Play one round--
    playRound(playerSelection, computerSelection);




  }
  getWinner(playerScore, computerScore);

  // Run until player chooses not to play again
  newGame();

}


function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    alert('You won! Great!');
  } else if (computerScore > playerScore) {
    alert('You lost to the computer! Better luck next time!');
  } else {
    alert(`It's a DRAW!`)
  }
}

function newGame() {
  let playAgain = confirm('Want to play again?');

  // Run another round if true
  if (playAgain) {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    alert('Thank you for playing!');
  }
}


// Initialize scores
let playerScore = 1;
let computerScore = 1;

// Run the game
game();

