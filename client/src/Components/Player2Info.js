
const Player2Info = ({selectedPlayer2, score2}) =>{
    return (
        <div className="playerInfo">
            <h2>{selectedPlayer2.name}</h2>
            <h2>Score: {score2}</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
        </div>
    )
}

export default Player2Info;