import React from 'react';
import ListItem from './ListItem';

const HighScoreList = ({highScores, deleteHighScore, descendingHighScores, getDescendingHighScores}) => {

    

    let desHighScores = highScores.sort((a, b) => b.score - a.score);
    let highScoreListItem = desHighScores.map((highScore) => { 
        return <ListItem highScore={highScore} key={highScore._id} deleteHighScore={deleteHighScore}/>
    })

    return (
        <div className='highScoreBoard'>
            <h3>High Scores</h3>
        <ul>
            {highScoreListItem}
        </ul>
        </div>
    )
}

// GET ALL from DB of winners 

// array of players[name, score]

// arranged in order of score


export default HighScoreList;