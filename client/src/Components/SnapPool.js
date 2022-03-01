import React from "react";
import Card from "./Card";
import './SnapPool.css';

const SnapPool =({pool, gameState}) =>{

    const snapPool = pool.map((card, index) => { 
            return <Card 
            card={card} 
            key={index} 
            index={index}/>
        });

        return(
        <div class="snappool">
            {gameState ? 
            <>
                <div class="card1">{snapPool[snapPool.length-1]} </div>
                <div class="card2">{snapPool[snapPool.length-2]}</div>
                <div class="card3">{snapPool[snapPool.length-3]}</div>
                {/* <div class="card4">{snapPool[snapPool.length-4]}</div>
                <div class="card5">{snapPool[snapPool.length-5]}</div>
                <div class="card6">{snapPool[snapPool.length-6]}</div> */}
            </> : <p>hello</p>}
            
        </div>
    )
    };
export default SnapPool;




