import React from 'react';
import ListItem from './ListItem';

const HighScoreList = ({players, deletePlayer}) => {
    const highScoreListItem = players.map((player) => {
        return <ListItem player={player} key={player._id} deletePlayer={deletePlayer}/>
    })

    return (
        <div className='highScoreBoard'>
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