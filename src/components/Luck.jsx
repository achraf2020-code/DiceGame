import { useState,useEffect } from "react"
const Lucky =(props)=>{
    return (
        <div className="dice--section dice--result">
           <img 
            className="dice" 
            // src ={`./images/${props.diceData[winnerNumber].url}`}
            src ={`/images/${props.url}`}
          />
        </div>
    )
}
export default Lucky