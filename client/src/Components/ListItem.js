import React from 'react';

const ListItem = ({highScore, deleteHighScore, index}) => {


    return (
        <div className='individual-player'>
            {index + 1}:  {highScore.name} {highScore.score} <button onClick={()=>deleteHighScore(highScore._id)}>🗑</button>
        </div>
    )
}

export default ListItem;