import React from 'react';
import './Board.css';
import {game} from '../Logic';
import {boardData} from '../Data';

function createBoard() {
  var cells = [];
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      var pair = x + '-' + y;
      
      var cellStyle = {
        backgroundColor: paintCell(pair),
      };
      
      if (!boardData.excludedCells.includes(pair)) {
        cells.push(
          <div key={pair} style={cellStyle} className={boardData.expandableCells.includes(pair) ? 'Cell div expanded ' + pair : 'Cell div ' + pair}>
            {placeTokens(pair)}
          </div>
        );
      }
    }
  }
  return cells;
}

function paintCell(pair) {
  if (boardData.p1.area.includes(pair)) {
    return 'blue';
  } else if (boardData.p2.area.includes(pair)) {
    return 'green';
  } else if (boardData.p3.area.includes(pair)) {
    return 'red';
  } else if (boardData.p4.area.includes(pair)) {
    return 'yellow';
  }
  
  return 'white';
}

function placeTokens(pair) {
  var styleToken = {
    backgroundColor: "",
  };
  
  var buttonToken, nameButton;

  for (var prop in boardData.colors){
    if (boardData[prop].token.includes(pair)) {
      styleToken.backgroundColor = boardData.colors[prop];
      nameButton = "Token "+prop+' ' + pair;
      
      buttonToken = <button style={styleToken} className={nameButton}></button>;
      
      return buttonToken;
    }
  }
}

class Board extends React.Component {
  componentDidUpdate(){
    game(this.props.playerRound, this.props.rounds, this.props.movements, boardData)
  }

  render() {
    return (
      <div className='Board'>{createBoard()}</div>
    )
  }
}

export default Board;
