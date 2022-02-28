// ALL GAME MECHANICS HERE

// 3 arrays that are [Player1Hand], [Player2Hand], [SnapPool]


import React from "react";
import Card from "./Card";

const SnapPool =({pool}) =>{

    const snapPool = pool.map((card, index) => { 
            return <Card 
            card={card} 
            key={index} 
            index={index}/>
        });

    return(
        <div>
            <ul>
                    Snap Pool:{pool.length}
                    {snapPool[snapPool.length-1]}
                    {snapPool[snapPool.length-2]}
                </ul>
        </div>
    )
    };
export default SnapPool;

// const poolList = pool.map((card, index) => { 
//     return <Card 
//     card={card} 
//     key={index} 
//     index={index}/>
// });



