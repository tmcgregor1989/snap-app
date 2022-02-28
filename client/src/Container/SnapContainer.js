import React, {useState, useEffect} from "react";
import HighScoreList from "../Components/Highscore";
import Player1Hand from "../Components/Player1Hand";
import Player2Hand from "../Components/Player2Hand";
import SnapPool from "../Components/SnapPool";
import { postHighScore as dbpostHighScore } from "../HighScoreService";
import NameForm1 from "../Components/NameForm";
import { getHighScores as dbGetHighScores, deleteHighScore as dbDeleteHighScore, updateHighScore } from "../HighScoreService";
import Instructions from "../Components/Instructions";


const SnapContainer = () => {

    const [pool, setPool] = useState([]);
    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState([]);
    const [highScores, setHighScores] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [score1, setScore1] = useState([]);
    const [score2, setScore2] = useState([]);


    // document.addEventListener('keydown', logKey);

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

    const updatePlayerScore = updatedScore => {
        updateHighScore(updatedScore);
    
        const updatedScoreIndex = highScores.findIndex(highScore => highScore._id === updatedScore._id);
        const updatedScores = [...highScores];
        updatedScores[updatedScoreIndex] = updatedScore;
        setHighScores(updatedScores);
    
    
      }
    //   function to be added to appropriate component in order to invoke updatePlayerScore function
    // const giveWinnerPoints = () => {
        // updatePlayerScore({
        //     _id: highScore._id,
        //     name: highScore.name,
        //     score: (take score from game somehow)
        // })
    

    
    const [highlight, setHighlight] = useState("2px solid black");
    function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
        if (key === "a") {
            if (hand1.length > 0){
                let card = hand1.pop()
                let newPool = [...pool, card]
                setHand1(hand1)
                setPool(newPool)  
            }
        }
        if (key === "l") {
            setHighlight("2px solid red");
            if (hand2.length > 0){
                let card = hand2.pop()
                let newPool = [...pool, card]
                setHand2(hand2)
                setPool(newPool)  
            }
        if (key === "d") {
            if (pool[-1].value === pool[-2].value){
                let newScore1 = (score1 += pool.length)
                setScore1(newScore1)
                let newHand1 = [...hand1, pool]
                setHand1(newHand1)
                setPool([])
            }
            else {
                let newScore1 = (score1 -5)
                setScore1(newScore1)
            }
        }
        if (key === "j") {
            if (pool[-1].value === pool[-2].value){
                let newScore2 = (score2 += pool.length)
                setScore2(newScore2)
                let newHand2 = [...hand2, pool]
                setHand1(newHand2)
                setPool([])
            }
            else {
                let newScore2 = (score2 -5)
                setScore2(newScore2)
            }
        }
        else if (key === "g") {
            setHighlight("2px solid green")
        }
        }
    }

    return(
        <div id="container">
            <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} style={{border: highlight}} />
            </div>
            <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Instructions (Hover over me)
            </button>
            {isShown && (
            <div>
            <Instructions/>
            </div>
            )}

            <button onClick={dealPool}>Deal</button>
            <button onClick={playCard1}>Play card 1</button>

            <NameForm1 postHighScore={postHighScore}/>
        

            <Player1Hand hand1={hand1}/>
            <Player2Hand hand2={hand2}/>
            <SnapPool pool={pool}/>
            <HighScoreList highScores={highScores} deleteHighScore={deleteHighScore} />
        </div>
        )
}

export default SnapContainer;