import React from 'react';
import { GiSkullCrossedBones } from 'react-icons/gi';

const ListItem = ({highScore, deleteHighScore, index}) => {


    return (
        <div className='individual-player'>
            {index + 1}:  {highScore.name}&nbsp;{highScore.score}&nbsp;&nbsp;     
        </div>
    )
}
// 🗑
export default ListItem;


{/* <button onClick={()=>deleteHighScore(highScore._id)}><GiSkullCrossedBones/></button> */}