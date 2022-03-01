import React from 'react';


const EndGame = ({score1, score2, selectedPlayer1, selectedPlayer2, winner, setWinner, setGameEnded, setGameState}) => {

        
        let winner1 = selectedPlayer1
        let winner2 = selectedPlayer2
        if (score1 > score2) {
        setWinner(winner1)
        }else{
            setWinner(winner2)
        }

        const handleClick = () =>{
            setGameEnded(false)
        }


    return (

        <div className="gameover-screen">
        <h3>Game Over</h3>
        <p>{winner.name} wins!!!</p>
        <button onClick={handleClick}>End Game</button>
        </div>

    )
}


export default EndGame;