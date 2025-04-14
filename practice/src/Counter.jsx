import { useState } from "react";

function Counter(){
  // let [stateVariable, setstateVariable] = useState(0);
  let [Count, setCount] = useState(0);

  //function to increase count
  let incCount = () =>{
    setCount(Count+1);
    console.log(Count)
  }

  return(
    <>
    <h3>Count = {Count}</h3>
    <button onClick={incCount}>Increase count</button>
    </>
  )
}

export default Counter;