import React from 'react';
import './Game.css';
import Board from '../Board/Board';
import Dice from '../Dice/Dice';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiceChange = this.handleDiceChange.bind(this);
    this.state = { movements: 1 };
  }

  handleDiceChange(movements) {
    this.setState({ movements });
  }
  
  render() {
    const moves = this.state.movements

    return (
    <div className="Game">
      <Board movements={moves} onDiceChange={this.handleDiceChange} />
      <Dice movements={moves} onDiceChange={this.handleDiceChange}/>
    </div>
    )
  }
}

export default Game;
