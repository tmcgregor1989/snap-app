// player 2 hand[] length displayed numberically

// taken from SnapPool.js

import React from "react";

const Player2Hand = ({hand2}) => {


    return(
        <div>
            <ul>
                P2 Hand:{hand2.length}
            </ul>
        </div>
    )
}

export default Player2Hand