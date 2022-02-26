import React, {useState, useEffect} from 'react';

const ListItem = ({player, deletePlayer}) => {


    return (
        <div className='individual-player'>
            <p>{player.name}</p>
            <p>{player.score}</p>
            <button onClick={()=>deletePlayer(player._id)}>Remove Player from Scoreboard becuase they are a filthy cheat</button>
        </div>
    )
}

export default ListItem;