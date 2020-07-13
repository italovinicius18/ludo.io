import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Dice from '../Dice/Dice';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiceChange = this.handleDiceChange.bind(this);
    this.state = { movements: 1 , rounds: 0};
  }

  handleDiceChange(movements, rounds) {
    this.setState({ movements });
    this.setState({ rounds });
  }
  
  render() {
    const moves = this.state.movements
    const round = this.state.rounds

    return (
    <div className="Game">
      <Board movements={moves} rounds={round} onDiceChange={this.handleDiceChange} />
      <Dice movements={moves} rounds={round} onDiceChange={this.handleDiceChange}/>
    </div>
    )
  }
}

export default Game;
