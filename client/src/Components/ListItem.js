import React from 'react';
import { GiSkullCrossedBones } from 'react-icons/gi';

const ListItem = ({highScore, deleteHighScore, index}) => {


    return (
        <div className='individual-player'>
            {index + 1}:  {highScore.name} {highScore.score} <button onClick={()=>deleteHighScore(highScore._id)}><GiSkullCrossedBones/></button>
        </div>
    )
}
// 🗑
export default ListItem;