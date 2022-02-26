// player 1 hand[] length displayed numberically

// taken from SnapPool.js

const Player1NameCard = ({player1}) =>{
    return (
        <>
            <h1>{player1.name}</h1>
            <p>Score: {player1.score}</p>
        </>
    )
}

export default Player1NameCard;