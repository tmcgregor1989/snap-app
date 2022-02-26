//2 x text input fields, placeholdered with "player1", "player2".
// START GAME button that pushes those names

import {useState} from "react";
import {postHighScore} from "../HighScoreService"

// BELOW IS THE POSTPLAYERS FUNCTION:
// export const postPlayers = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }


const NameForm = ({postHighScore}) =>{
    const [player1name, setPlayer1Name] = useState("");
    const [player2name, setPlayer2Name] = useState("");

    // const handlePlayer1NameChange = (event) => setPlayer1Name(event.target.value);
    // const handlePlayer2NameChange = (event) => setPlayer2Name(event.target.value);



    const handleSubmit = (event) => {
        event.preventDefault();
        addPlayers({
            Player1: player1name,
            Player1Score: 0,
            Player2: player2name,
            Player2Score: 0
        });
        setPlayer1Name("");
        setPlayer2Name("")
    }

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="player1name">Player 1 Name:</label>
            <input  onChange={onChange}type="text" id="player1name" v-model="player1name" required/>


            <input type="submit" value="Start Game" id="Start"/>

        </form>

{/* <label htmlFor="player2name">Player 2 Name:</label>
<input  onChange={onChange}type="text" id="player2name"  required/> */}

    )
}
export default NameForm;