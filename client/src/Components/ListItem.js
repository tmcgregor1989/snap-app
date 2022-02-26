import React, {useState, useEffect} from 'react';

const ListItem = ({highScore, deleteHighScore}) => {


    return (
        <div className='individual-player'>
            <p>{highScore.name}</p>
            <p>{highScore.score}</p>
            <button onClick={()=>deleteHighScore(highScore._id)}>Remove Player from Scoreboard becuase they are a filthy cheat</button>
        </div>
    )
}

export default ListItem;