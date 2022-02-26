// ALL GAME MECHANICS HERE

// 3 arrays that are [Player1Hand], [Player2Hand], [SnapPool]


import React from "react";

const SnapPool = ({pool}) => {


    return(
        <div>
            <ul>
                Snap Pool:{pool.length}
            </ul>
        </div>
    )
}

export default SnapPool