//PSEUDO-CODE

// Prompt the user to input a move --
// Should either be 'rock', 'paper' or 'scissors'
// Force the user to input a valid move
function playerMove() {
  let isValidMove = true;
  while (isValidMove) {
    const playerMove = (prompt('Choose a move: Rock, Paper, Scissors')).toLowerCase();
    if (playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors') {
      return playerMove;
    } else if (!playerMove) {
      alert('PUSSY!')
      isValidMove = false;
    } else {
      alert('Please choose a valid move!');
    }
  }

}
// Store that move to a variable playerSelection

let playerSelection = playerMove();
// Make the computer 'play', store this move to computerSelection

function computerMove() {
  const moves = ['rock', 'scissors', 'paper'];

  let moveNum = Math.floor(Math.random() * 3);
  return moves[moveNum];
}

let computerSelection = computerMove();

// Play one round--

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    console.log('You win! Rock beats scissors!');
  } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    console.log('You win! Scissors beat paper!');
  } else if ((playerSelection === 'paper') && (computerSelection === 'rocks')) {
    console.log('You win! Scissors beat paper!');
  } else if ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
    console.log('You lost! Rock beats scissors!');
  } else if ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
    console.log('You lost! Scissors beat paper!');
  } else if ((computerSelection === 'paper') && (playerSelection === 'rocks')) {
    console.log('You lost! Scissors beat paper!');
  } else {
    console.log('DRAW!!!');
  }
}

playRound(playerSelection, computerSelection);
// If the moves are the same, DRAW
// rocks(W) > scissors
// scissors(W) > paper
// paper(W) > scissors

