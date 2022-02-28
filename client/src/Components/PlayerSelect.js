import React from "react";

const PlayerSelector = ({highScores, setSelectedPlayer1, setSelectedPlayer2}) => {

    const handleChange1 = function(event){
        const player1Choice = highScores[event.target.value]
        console.log(event.target.value)
        setSelectedPlayer1(player1Choice)
    }

    const handleChange2 = function(event){
        const player2Choice = highScores[event.target.value]
        setSelectedPlayer2(player2Choice)
    }

    const playerOptions = highScores.map((highscore, index) => {
        return <option value={index} key={index}>{highscore.name}</option>

    }) 

    return(
        <div className="playerselector">
            <h3>Player 1 select</h3>
            <select defaultValue="" onChange={handleChange1}>
            <option value="">Player List</option>
            {playerOptions}
        </select>

            <h3>Player 2 select</h3>
            <select defaultValue="" onChange={handleChange2}>
            <option value="">Player List</option>
            {playerOptions}
        </select>
        </div>
    )

}

export default PlayerSelector;