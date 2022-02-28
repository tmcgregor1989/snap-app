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
            <div class="count">{pool.length} cards to be snapped up!</div>
            <div class="left">{snapPool[snapPool.length-1]} </div>
            <div class="middle">{snapPool[snapPool.length-2]}</div>
            <div class="right">{snapPool[snapPool.length-3]}</div>
        </div>
    )
    };
export default SnapPool;




