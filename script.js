const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const winner = document.querySelector('.winner p');
  // Play round
  const playRound = () => {
    const moves = document.querySelectorAll('.moves button');
    // Computer moves
    // Use an array of moves
    const computerMoves = ['rock', 'paper', 'scissors'];
    moves.forEach(move => {
      move.addEventListener('click', function () {
        // Computer choice
        const computerNum = Math.floor(Math.random() * 3);
        const computerSelection = computerMoves[computerNum];

        // Call getWinner here
        getWinner(this.id, computerSelection);
        declareWinner();



      })
    })
  }

  // Update score
  const updateScore = () => {
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p');
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  }


  // Compare moves
  const getWinner = (playerSelection, computerSelection) => {


    //Check for a tie
    if (playerSelection === computerSelection) {
      winner.textContent = 'It is a tie!';
      return;
    }

    // Check for rock
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      }
    }

    // Check for paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore();
        return;
      }
    }

    // Check for scissors
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        winner.textContent = 'Computer wins!';
        computerScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins!';
        playerScore++;
        updateScore();
        return;
      }
    }

  }

  const declareWinner = () => {
    const endOfGameWinner = document.querySelector('.winner-winner');
    if (playerScore === 5) {
      endOfGameWinner.textContent = 'PLAYER WINS THE GAME!';
      playerScore = 0;
      computerScore = 0;
      updateScore();

    }

    if (computerScore === 5) {
      endOfGameWinner.textContent = 'COMPUTER WINS THE GAME!';
      playerScore = 0;
      computerScore = 0;
      updateScore();

    }

    setTimeout(function () {
      endOfGameWinner.textContent = '';
      winner.textContent = 'Waiting for player\'s move. . .';
    }, 1000);

  }

  // Add option for NEW GAME here


  // Call all inner functions(s)
  playRound();
}

// Run the game function
game();