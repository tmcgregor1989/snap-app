
const Player1Info = ({selectedPlayer1, score1}) =>{
    return (
        <div className="playerInfo">
            <h2>{selectedPlayer1.name}</h2>
            <h3>Score: {score1}</h3>
        </div>
    )
}

export default Player1Info;