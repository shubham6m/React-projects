import { useState } from "react";

export default function Ludoboard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  // for blue moves
  let updateBlue = () => {
    // setMoves({ ...setMoves, blue: moves.blue + 1 });
    setMoves((prevmoves)=>{
     return {...prevmoves, blue: prevmoves.blue+1}
    })
  };

  //for blue updates
  // let[arr,setArr] = useState(["no moves"]);

  // let updateBlue =()=>{
  //   arr.push("blue moves");
  //   // setArr(arr);
  //   //means here we need to also need to spread array : means both array & objects need to spread array
  //   setArr([...arr])
  // }

  // for red moves
  let updateRed = () => {
    setMoves((prevmoves)=>{
      return {...prevmoves, red : prevmoves.red+1}
    })
  }

  // for yellow moves
  let updateYellow = () =>{
    setMoves((prevmoves) =>{
      return {...prevmoves, yellow : prevmoves.yellow+1}
    })
  }

  //for green moves
  let updateGreen = ()=>{
    setMoves((prevmoves) =>{
      return {...prevmoves,green: prevmoves.green + 1}
    })
  }

return (
  <>
    <h2>Game Begins</h2>
    <div className="board">
      <p>{arr}</p>
      <p>Blue Moves = {moves.blue}</p>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>
      <p>Red Moves = {moves.red}</p>
      <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
      <p>Yellow Moves = {moves.yellow}</p>
      <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
      <p>Green Moves = {moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
    </div>
  </>
);
}