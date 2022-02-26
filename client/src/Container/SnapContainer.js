import React, {useState, useEffect} from "react";
import Player1Hand from "../Components/Player1Hand";
import Player2Hand from "../Components/Player2Hand";
import SnapPool from "../Components/SnapPool";
import { postHighScore as dbpostHighScore } from "../HighScoreService";
import NameForm1 from "../Components/NameForm";


const SnapContainer = () => {

    const [pool, setPool] = useState([])
    const [hand1, setHand1] = useState([])
    const [hand2, setHand2] = useState([])
    const [highScores, setHighScores] = useState([])

    useEffect(() => {
        getPool();
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
    

    return(
        <div id="container">
            <NameForm1 postHighScore={postHighScore}/>
            <button onClick={dealPool} pool={pool}>Deal</button>
            <Player1Hand hand1={hand1}/>
            <Player2Hand hand2={hand2}/>
            <SnapPool pool={pool}/>
        </div>
    )

}

export default SnapContainer;