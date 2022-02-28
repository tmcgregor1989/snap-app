
const Player2Info = ({selectedPlayer2}) =>{
    return (
        <div className="playerInfo">
            <h2>Player 2 Info</h2>
            <h3>{selectedPlayer2.name}</h3>
            <p>Score:</p>
        </div>
    )
}

export default Player2Info;