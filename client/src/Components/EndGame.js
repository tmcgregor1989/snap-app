import React from 'react';
import './EndGame.css';


const EndGame = ({score1, score2, selectedPlayer1, selectedPlayer2, winner, setWinner, setGameEnded, setGameState}) => {
    let winner1 = selectedPlayer1
    let winner2 = selectedPlayer2
    if (score1 > score2) {
    setWinner(winner1)
    }
    else{
        setWinner(winner2)
    }

    const handleClick = function(){
        setGameEnded(false)
        document.location.reload()
    }


    return (
        <div className="gameover-screen">
        <h3>Game Over</h3>
        <p>{winner.name} wins!!!</p>
        <button onClick={handleClick}>Another Round?</button>
        </div>
    )
}


export default EndGame;