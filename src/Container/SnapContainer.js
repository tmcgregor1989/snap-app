import React, {useState, useEffect} from "react";


const DeckContainer = () => {

    const [deck, setDeck] = useState([])

    useEffect(() => {
        getDeck();
    }, [])

    const getDeck = function(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => setDeck(data.cards))
    }

    return
        <div id="container">
        </div>
}

export default DeckContainer;