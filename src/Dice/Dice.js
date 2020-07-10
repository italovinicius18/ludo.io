import React, { useState } from "react";
import "./Dice.css";

function Dice() {

  const [DieResult, setDieResult] = useState(1);

  const DieImage = require(`../assets/${DieResult}.png`);

  function rollDice() {
    setDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="Dice">
      <div style={{ display: "flex", margin: 20 }}>
        <img src={DieImage} className="die" alt="Die" />
      </div>
      <button className="button" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}

export default Dice;
