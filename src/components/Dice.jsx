
const Dice = (props)=>{
    return (
      <div className="dice--section dice--try">
        <img 
          className="dice" 
          src ={`./images/${props.url}`}
          
          />
      </div>
    )
  }
  export default Dice