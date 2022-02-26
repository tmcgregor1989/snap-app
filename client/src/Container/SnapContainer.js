import React, {useState, useEffect} from "react";
import HighScoreList from "../Components/Highscore";
import Player1Hand from "../Components/Player1Hand";
import Player2Hand from "../Components/Player2Hand";
import SnapPool from "../Components/SnapPool";
import { postHighScore as dbpostHighScore } from "../HighScoreService";
import NameForm1 from "../Components/NameForm";
import { getHighScores as dbGetHighScores, deleteHighScore as dbDeleteHighScore } from "../HighScoreService";



const SnapContainer = () => {

    const [pool, setPool] = useState([])
    const [hand1, setHand1] = useState([])
    const [hand2, setHand2] = useState([])
    const [highScores, setHighScores] = useState([])

    useEffect(() => {
        getPool();
    }, [])

    useEffect(() => {
        getHighScores();
    }, [])

    const getPool = function(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => setPool(data.cards))
    }

    const dealPool = function(pool){

        // hand1 = Array.from(new Set(pool))
        // hand2 = Array.from(new Set(pool))
        // hand1.splice(0, 26)
        // hand2.splice(26, 26)
        // pool = []
        setHand1(pool)
        setHand2(pool)
    }


    const postHighScore = newHighScore => {
        dbpostHighScore(newHighScore)
          .then(savedHighScore => setHighScores([ ...highScores, savedHighScore ]));
      };

    const getHighScores = function(){
        dbGetHighScores()
        .then((data) => {
            console.log(data);
            setHighScores(data)
        })
    }

    const deleteHighScore = (id) => {
        dbDeleteHighScore(id).then(()=>{
            let temp = highScores.map(g=>g);
            const toDel = highScores.map(g =>g._id).indexOf(id);
            temp.splice(toDel, 1);
            setHighScores(temp);
            })
        }

    

    return(
        <div id="container">
            <NameForm1 postHighScore={postHighScore}/>
            <button onClick={dealPool} pool={pool}>Deal</button>
            <Player1Hand hand1={hand1}/>
            <Player2Hand hand2={hand2}/>
            <SnapPool pool={pool}/>
            <HighScoreList highScores={highScores} deleteHighScore={deleteHighScore}/>
        </div>
    )

}

export default SnapContainer;