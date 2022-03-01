import React from "react";
import Card from "./Card";
import './SnapPool.css';

const SnapPool =({pool}) =>{

    const snapPool = pool.map((card, index) => { 
            return <Card 
            card={card} 
            key={index} 
            index={index}/>
        });

    return(
        <div class="snappool">
            <div class="count">Snap Pool:{pool.length} </div>
            <div class="top">{snapPool[snapPool.length-1]} </div>
            <div class="bottom">{snapPool[snapPool.length-2]}</div>
        </div>
    )
    };
export default SnapPool;




