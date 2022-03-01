import React from "react";


const NameForm1 = ({postHighScore, setPlayer1Name, player1name}) =>{
    // const [player1name, setPlayer1Name] = useState("");
    // const [player2name, setPlayer2Name] = useState("");

    const handlePlayer1NameChange = (event) => setPlayer1Name(event.target.value);



    const handleSubmit1 = (event) => {
        event.preventDefault();
        postHighScore({
            name: player1name,
            score: 0
        });


    }

    return (
        <div className="form">
        <form className="" onSubmit={handleSubmit1} method="post" id="playerForm">
            <label htmlFor="player1name">Add Player:</label>
            <input onChange={handlePlayer1NameChange}type="text" id="player1name" required placeholder="Player Name"/>


            <input type="submit" value="Add" id="Start"/>
            <input type="reset"/>

        </form>
        </div>


    )
}
export default NameForm1;