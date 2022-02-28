
const Player2Info = ({selectedPlayer2, score2}) =>{
    return (
        <div className="playerInfo">
            <h2>Player 2 Info: {selectedPlayer2.name}</h2>
            <h3>Score: {score2}</h3>

        </div>
    )
}

export default Player2Info;