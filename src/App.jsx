
import diceData from "./assets/dices"
import Dice from "./components/Dice";
import Lucky from "./components/Luck";
import Secore from "./components/Secore";
import { useState,useEffect } from "react";
const winnerNumber = Math.floor((Math.random()*5) + 1)
// let count = 0
const App = ()=>{
  const [luckyNumber,setLuckyNumber] = useState("")
  const [tryCount,setTryCount] = useState(0)
  const [decies,setDices] = useState(diceData)
  const handleClick = (e)=>{
      setLuckyNumber(()=>Math.floor((Math.random()*5) + 1))
      setTryCount((prevState)=>prevState+1)
      // console.log(tryCount)
    }  
  const handleRestart = ()=>{
    location.reload()
  }
  
  return (
    <div className="container"> 
      <div className="dice--game">
        <Lucky  url={!winnerNumber?"dice-one.png":decies[winnerNumber].url}  />
        <Secore winnerNumber={winnerNumber} luckyNumber={luckyNumber} count = {tryCount}/>
        <Dice url={!luckyNumber?"dice-one.png":decies[luckyNumber].url}/> 
        {(tryCount < 3)?
             <button  className="btn" onClick={handleClick} > 
              <img className="dice--icon" src ={ "./images/dice-icon.png"}/>
              Try your chance 
            </button>
        :
        <button  className="btn" onClick={handleRestart} > 
            <img className="dice--icon" src ={ "./images/dices-icon-rand.png"}/>
          Start new game
        </button>  
        }
     
      </div>
  </div>
  )
}
export default App