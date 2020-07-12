import React from "react";
import "./Dice.css";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    this.props.onDiceChange(randomNumber);
  }

  render() {
    const DieImage = require(`../../assets/${this.props.movements}.png`);

    return (
      <div className="Dice">
        <div style={{ display: "flex" }}>
          <img src={DieImage} className="die" alt="Die" />
        </div>
        <button className="button" onClick={this.rollDice}>
          Roll
        </button>
      </div>
    );
  }
}

export default Dice;
