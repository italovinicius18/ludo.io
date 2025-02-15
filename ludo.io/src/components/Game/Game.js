import React from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

import './Game.css';

import Board from '../Board/Board';
import Dice from '../Dice/Dice';

let socket;
const ENDPOINT = 'localhost:5000';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiceChange = this.handleDiceChange.bind(this);
    this.state = { movements: 1 , playerRound:0 ,rounds: 0};
  }

  componentDidMount() {
    const { name, room } = queryString.parse(this.props.location.search);

    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

  }

  handleDiceChange(movements, playerRound, rounds) {
    this.setState({ movements });
    this.setState({ playerRound });
    this.setState({ rounds });
  }
  
  render() {
    const moves = this.state.movements
    const playerRound = this.state.playerRound
    const rounds = this.state.rounds

    return (
    <div className="Game">
      <Board movements={moves} playerRound={playerRound} rounds={rounds} onDiceChange={this.handleDiceChange} />
      <Dice movements={moves} playerRound={playerRound} rounds={rounds} onDiceChange={this.handleDiceChange}/>
    </div>
    )
  }
}

export default Game;
