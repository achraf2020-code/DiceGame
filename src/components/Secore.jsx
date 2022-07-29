import {useState,useEffect} from "react"

const Secore = (props)=>{
   const [nbrWin,setNbrWin] = useState(0) 
   useEffect(()=>{
    if(props.luckyNumber === props.winnerNumber){
        setNbrWin(prevState => prevState+1 )
    }else{
        setNbrWin(prevState => prevState)
    }
   },[props.luckyNumber])
    return(
    <div className="secore">
        <span>Try N° {props.count}/</span><strong> 3</strong>
        <p>Nbr win: {nbrWin}</p>
    </div>
)}
export default Secore