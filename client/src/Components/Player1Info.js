
const Player1Info = ({player1}) =>{
    return (
        <>
            <h1>{player1.name}</h1>
            <p>Score: {player1.score}</p>
        </>
    )
}

export default Player1Info;