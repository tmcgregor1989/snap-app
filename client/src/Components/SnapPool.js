// ALL GAME MECHANICS HERE

// 3 arrays that are [Player1Hand], [Player2Hand], [SnapPool]


import React from "react";
// import Card from "./Card";

const SnapPool = ({pool}) => {

    // const poolList = pool.map((card, index) => { 
    //     return <Card card={card} key={index} index={index}/>
    // });

    return(
        <div>
            <ul>
                Snap Pool:{pool.length}
            </ul>
        </div>
    )
};

export default SnapPool;