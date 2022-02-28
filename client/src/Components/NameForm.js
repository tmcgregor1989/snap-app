import React from "react";


const NameForm1 = ({postHighScore, postHighScore2, setPlayer1Name, setPlayer2Name, player1name, player2name}) =>{
    // const [player1name, setPlayer1Name] = useState("");
    // const [player2name, setPlayer2Name] = useState("");

    const handlePlayer1NameChange = (event) => setPlayer1Name(event.target.value);
    const handlePlayer2NameChange = (event) => setPlayer2Name(event.target.value);



    const handleSubmit1 = (event) => {
        event.preventDefault();
        postHighScore({
            name: player1name,
            score: 0,
           
        });
    }

        const handleSubmit2 = (event) => {
            event.preventDefault();
            postHighScore2({
                name: player2name,
                score: 0,
              
            });
        // setPlayer1Name("");
        // setPlayer2Name("")
    }

        
    

    return (
        <div className="form">
        <form className="" onSubmit={handleSubmit1} method="post">
            <label htmlFor="player1name">Player 1 Name:</label>
            <input onChange={handlePlayer1NameChange}type="text" id="player1name" required/>


            <input type="submit" value="Ready" id="Start"/>

        </form>

        <form className="" onSubmit={handleSubmit2} method="post">
            <label htmlFor="player2name">Player 2 Name:</label>
            <input onChange={handlePlayer2NameChange}type="text" id="player2name" required/>


            <input type="submit" value="Ready" id="Start"/>

        </form>
        </div>


    )
}
export default NameForm1;