//2 x text input fields, placeholdered with "player1", "player2".
// START GAME button that pushes those names

import {useState} from "react";
import {postPlayers} from "./GamesService";
// NEED TO UPDATE FILE THAT WILL HAVE FUNCTION IN ABOVE LINE

// BELOW IS THE POSTPLAYERS FUNCTION:
// export const postPlayers = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }


const NameForm = ({addPlayers}) =>{
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        formData["player1name"] = formData.player1name;
        formData["player2name"] = formData.player2name;
        postPlayers(formData).then((data) => {
            addNames(data);
        });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="player1name">Player 1 Name:</label>
            <input  onChange={onChange}type="text" id="player1name" v-model="player1name" required/>

            <label htmlFor="player2name">Player 2 Name:</label>
            <input  onChange={onChange}type="player2name" id="player2name"  required/>

            <input type="submit" value="Save" id="save"/>

        </form>
    )
}
export default NameForm;