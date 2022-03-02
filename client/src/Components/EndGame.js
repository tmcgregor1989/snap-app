import React from 'react';
import './EndGame.css';
import CountUp from 'react-countup';



const EndGame = ({score1, score2, selectedPlayer1, selectedPlayer2, winner, setWinner, setGameEnded, setGameState, replayGame}) => {

        
        let winner1 = selectedPlayer1
        let winner2 = selectedPlayer2
        if (score1 > score2) {
        setWinner(winner1)
        }else{
            setWinner(winner2)
        }

        const handleClick2 = () =>{
            replayGame()
        }

        const handleClick = ()=>{
            window.location.reload();
         }

         


    return (

        <div className="gameover-screen">
        <h2>Game Over</h2>
        <h3>{winner.name} wins!!!</h3>
        {/* <p>{selectedPlayer1.name}: <CountUp start={0} end={score1} duration={2.5} delay={0.5} /></p> */}
        <p>Score: <CountUp start={0} end={winner.score} duration={2.5} delay={0.5} /></p>
        {/* <h3>{winner.name} wins!!!</h3> */}
        <button onClick={handleClick}>End Game</button>
        <button onClick={handleClick2}>Play Again</button>
        </div>

    )
}


export default EndGame;