// player 1 hand[] length displayed numberically

// taken from SnapPool.js

import React from "react";

const Player1Hand = ({hand1}) => {


    return(
        <div>
            <h1>
                {hand1.length} cards left
            </h1>
        </div>
    )
}

export default Player1Hand
