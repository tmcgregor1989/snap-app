import React, {useState, useEffect} from "react";
import Player1Hand from "../Components/Player1Hand";
import Player2Hand from "../Components/Player2Hand";
import SnapPool from "../Components/SnapPool";


const SnapContainer = () => {

    const [pool, setPool] = useState([])
    const [hand1, setHand1] = useState([])
    const [hand2, setHand2] = useState([])

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
        let hand1 = pool
        setHand1(hand1)
    }

    return(
        <div id="container">
            <button onClick={dealPool} pool={pool}>Deal</button>
            <Player1Hand hand1={hand1}/>
            <Player2Hand hand2={hand2}/>
            <SnapPool pool={pool}/>
        </div>
    )

}

export default SnapContainer;