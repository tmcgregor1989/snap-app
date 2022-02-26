import React, {useState, useEffect} from "react";
import Player1Hand from "../Components/Player1Hand";
import Player2Hand from "../Components/Player2Hand";
import SnapPool from "../Components/SnapPool";


const SnapContainer = () => {

    const [pool, setPool] = useState([])
    const [hand1, setHand1] = useState([])
    const [hand2, setHand2] = useState([])

    // document.addEventListener('keydown', logKey);

    useEffect(() => {
        getPool();
    }, [])


    const getPool = function(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => setPool(data.cards))
    }

    const dealPool = function(){
        let newPool = []
        let newHand1 = pool.slice(0, 26)
        let newHand2 = pool.slice(26, 52)
        setPool(newPool)
        setHand1(newHand1)
        setHand2(newHand2)
    }

    // function logKey(a) {
    //     hand1.shift()
    //     setHand1(hand1)
    //     console.log(hand1)

    // }

    const playCard1 = function(){
    if (hand1.length > 0){
        let card = hand1.pop()
        let newPool = [...pool, card]
        setHand1(hand1)
        setPool(newPool)
        }
    }

    return(
        <div id="container">
            <button onClick={dealPool}>Deal</button>
            <button onClick={playCard1}>Play card 1</button>
            <Player1Hand hand1={hand1}/>
            <Player2Hand hand2={hand2}/>
            <SnapPool pool={pool}/>
        </div>
        )

}

export default SnapContainer;