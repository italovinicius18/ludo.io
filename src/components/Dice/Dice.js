import React from "react";
import "./Dice.css";
import { verifyPlaces } from "../Logic";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    var moves = this.props.movements;
    var playerRound = this.props.playerRound;
    var rounds = this.props.rounds;
    var randomNumber;

    
    randomNumber = Math.floor(Math.random() * 6) + 1;

    // To play again need to take six on the dice or catch other player, but i need the info if other players was catched or not, so we need the positions of other tokens in props
    if (playerRound === 4 && moves !== 6) {
      // Just restart the round if the fourth player dont take six
      playerRound = 1;
    } else if (moves === 6) {
      //If take six on the dice
      randomNumber = Math.floor(Math.random() * 6) + 1;
    } else {
      playerRound++;
    }
    
    rounds++;
    
    var availiablePlaces = verifyPlaces(playerRound);

    if(availiablePlaces.length>0 && !availiablePlaces.includes(randomNumber)){
      randomNumber = availiablePlaces[Math.floor(Math.random() * availiablePlaces.length)]
    }

    this.props.onDiceChange(randomNumber, playerRound, rounds);
  }

  render() {
    const DieImage = require(`../../assets/${this.props.movements}.png`);
    const colors = ["white", "blue", "green", "red", "yellow"];
    return (
      <div className="Dice">
        <div style={{ color: colors[this.props.playerRound] }}>
          {this.props.playerRound}
        </div>
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
