import React from "react";
import "./Dice.css";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    var round = this.props.rounds;
    var moves = this.props.movements;
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // To play again need to take six on the dice or catch other player, but i need the info if other players was catched or not, so we need the positions of other tokens in props
    if(round===4 && moves !== 6){ // Just restart the round if the fourth player dont take six 
      round = 1;  
    }
    else if (moves===6){ //If take six on the dice
      randomNumber = Math.floor(Math.random() * 6) + 1
    }
    else{
      round++;
    }

    this.props.onDiceChange(randomNumber,round);
  }

  render() {
    const DieImage = require(`../../assets/${this.props.movements}.png`);

    return (
      <div className="Dice">
        {this.props.rounds}
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
