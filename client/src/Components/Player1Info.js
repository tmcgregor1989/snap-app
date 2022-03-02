
const Player1Info = ({selectedPlayer1, score1, testState, setTestState, minus}) =>{

    

    


    return (
        <div className="playerInfo">
            <h2>{selectedPlayer1.name}</h2>
            <h2>Score: {score1}&nbsp;{minus}</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            

        </div>
    )
}

export default Player1Info;