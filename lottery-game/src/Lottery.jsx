import { useState } from "react";
import "./lottery.css";
import "./button.css";
import { genTicket, sum } from "./helper";

function Lottery() {
  // let [lottery, setLottery] = useState([0, 0, 0]);
  let [lottery, setLottery] = useState(genTicket(3));
  let isWinning = sum(lottery) === 15;
  // let isWinning = lottery[0] === lottery[1] === lottery[2];

  let generateNo = () => {
    return setLottery(genTicket(3));
  };

  return (
    <>
      <h2>Lottery Game!</h2>
      <div className="ticket">
        <span>{lottery[0]}</span>
        <span>{lottery[1]}</span>
        <span>{lottery[2]}</span>
      </div>
      {/* {console.log(sum(lottery))} */}
      <button onClick={generateNo}>Buy new ticket!</button>
      <h3>{isWinning && "Congratulations!! you won"}</h3>
    </>
  );
}

export default Lottery;
