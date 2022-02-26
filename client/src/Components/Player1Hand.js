// player 1 hand[] length displayed numberically

// taken from SnapPool.js

import React from "react";

const Player1Hand = ({hand1}) => {


    return(
        <div>
            <ul>
                P1 Hand:{hand1.length}
            </ul>
        </div>
    )
}

export default Player1Hand
