
const Player1Info = ({selectedPlayer1}) =>{
    return (
        <div className="playerInfo">
            <h2>Player 1 Info</h2>
            <h3>{selectedPlayer1.name}</h3>
            <p>Score:</p>
        </div>
    )
}

export default Player1Info;