import React, {useState, useEffect} from "react";


const SnapContainer = () => {

    const [deck, setDeck] = useState([])
    const [hand1, setHand1] = useState([])
    const [hand2, setHand2] = useState([])

    useEffect(() => {
        getDeck();
    }, [])

    const getDeck = function(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => console.log(data))
            // setDeck(data.cards))
    }

    const dealDeck = function(deck){
        // let hand1 = deck
        // let hand2 = deck
        // // hand1 = Array.from(new Set(deck))
        // // hand2 = Array.from(new Set(deck))
        // // hand1.splice(0, 26)
        // // hand2.splice(26, 26)
        // // deck = []
        // setHand1(hand1)
        // setHand2(hand2)
        // console.log(hand1)
        // console.log(hand2)
        console.log(deck)
    }

    return(
        <div id="container">
            <button onClick={dealDeck} deck={deck}>Deal</button>
        </div>
    )

}

export default SnapContainer;