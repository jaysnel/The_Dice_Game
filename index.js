var scores, 
roundScore, 
activePlayer, 
dice, 
gamePlaying;

startTheGame();


document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
			
		var dice = Math.floor(Math.random() * 6) + 1;

		
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'Dice/dice-' + dice + '.png';

              


		if (dice > 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else{
            safetyScore();
            
			nextPlayer();

			alert('You rolled a 1 this roll, points lost and next players turn. GOOD LUCK NEXT TIME!')
			}

	}

});


document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
		scores[activePlayer] += roundScore;

		
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


		
		if(scores[activePlayer] >= 21){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            alert('WE HAVE A WINNER!')
		} else{
			nextPlayer();
		}
	}


});


document.querySelector('.btn-new').addEventListener('click', startTheGame);

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0'
	document.getElementById('current-1').textContent = '0'

	document.querySelector('.player1_section').classList.toggle('active');
	document.querySelector('.player2_section').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

function safetyScore() {

    if(scores[activePlayer] >= 15) {
        scores[activePlayer] = 15;
        document.querySelector('#score-' + activePlayer).textContent = '15';
    } else {
        document.querySelector('#score-' + activePlayer).textContent = '0';
        scores[activePlayer] = 0;
    }
    
}


function startTheGame() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
  
    document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player1_section').classList.remove('active');
	document.querySelector('.player2_section').classList.remove('active');
	document.querySelector('.player1_section').classList.add('active');
}