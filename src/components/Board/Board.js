import React from 'react';
import './Board.css';
import {game} from '../Logic';

const boardData = {
  p1: {
    area: ['0-0', '0-1', '0-2', '0-3', '0-4', '0-5', '1-0', '1-5', '2-0', '2-5', '3-0', '3-5', '4-0', '4-5', '5-0', '5-1', '5-2', '5-3', '5-4', '5-5', '6-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6'], // prettier-ignore
    path: ['6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '4-6', '3-6', '2-6', '1-6', '0-6', '0-7', '0-8', '1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '7-14', '8-14', '8-13', '8-12', '8-11', '8-10', '8-9', '8-8', '9-8', '10-8', '11-8', '12-8', '13-8', '14-8', '14-7', '14-6', '13-6', '12-6', '11-6', '10-6', '9-6', '8-6', '8-5', '8-4', '8-3', '8-2', '8-1', '8-0', '7-0', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6'], // prettier-ignore
    token: ['1-1', '1-3', '3-1', '3-3'],
  },
  p2: {
    area: ['0-9', '0-10', '0-11', '0-12', '0-13', '0-14', '1-9', '1-14', '2-9', '2-14', '3-9', '3-14', '4-9', '4-14', '5-9', '5-10', '5-11', '5-12', '5-13', '5-14', '1-8', '1-7', '2-7', '3-7', '4-7', '5-7', '6-7'], // prettier-ignore
    path: ['1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '7-14', '8-14', '8-13', '8-12', '8-11', '8-10', '8-9', '8-8', '9-8', '10-8', '11-8', '12-8', '13-8', '14-8', '14-7', '14-6', '13-6', '12-6', '11-6', '10-6', '9-6', '8-6', '8-5', '8-4', '8-3', '8-2', '8-1', '8-0', '7-0', '6-0','6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '4-6', '3-6', '2-6', '1-6', '0-6', '0-7', '1-7', '2-7', '3-7', '4-7', '5-7', '6-7'], // prettier-ignore
    token:['1-10', '1-12', '3-10', '3-12'],
    
  },
  p3: {
    area: ['9-9', '9-10', '9-11', '9-12', '9-13', '9-14', '10-9', '10-14', '11-9', '11-14', '12-9', '12-14', '13-9', '13-14', '14-9', '14-10', '14-11', '14-12', '14-13', '14-14', '8-13', '7-13', '7-12', '7-11', '7-10', '7-9', '7-8'], // prettier-ignore
    path: ['8-13', '8-12', '8-11', '8-10', '8-9', '8-8', '9-8', '10-8', '11-8', '12-8', '13-8', '14-8', '14-7', '14-6', '13-6', '12-6', '11-6', '10-6', '9-6', '8-6', '8-5', '8-4', '8-3', '8-2', '8-1', '8-0', '7-0', '6-0', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '4-6', '3-6', '2-6', '1-6', '0-6', '0-7', '0-8', '1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '7-14', '7-13', '7-12', '7-11', '7-10', '7-9', '7-8'], // prettier-ignore
    token: ['10-10', '10-12', '12-10', '12-12'],
    
  },
  p4: {
    area: ['9-0', '9-1', '9-2', '9-3', '9-4', '9-5', '10-0', '10-5', '11-0', '11-5', '12-0', '12-5', '13-0', '13-5', '14-0', '14-1', '14-2', '14-3', '14-4', '14-5', '13-6', '13-7', '12-7', '11-7', '10-7', '9-7', '8-7'], // prettier-ignore
    path: ['13-6', '12-6', '11-6', '10-6', '9-6', '8-6', '8-5', '8-4', '8-3', '8-2', '8-1', '8-0', '7-0', '6-0', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '5-6', '4-6', '3-6', '2-6', '1-6', '0-6', '0-7', '0-8', '1-8', '2-8', '3-8', '4-8', '5-8', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '7-14', '8-14', '8-13', '8-12', '8-11', '8-10', '8-9', '8-8', '9-8', '10-8', '11-8', '12-8', '13-8', '14-8', '14-7', '13-7', '12-7', '11-7', '10-7', '9-7', '8-7'], // prettier-ignore
    token: ['10-1', '10-3', '12-1', '12-3'],
  },
  expandableCells: ['1-1', '1-3', '3-1', '3-3', '1-10', '1-12', '3-10', '3-12', '10-1', '10-3', '12-1', '12-3', '10-10', '10-12', '12-10', '12-12'], // prettier-ignore
  excludedCells: ['1-2', '1-4', '2-1', '2-2', '2-3', '2-4', '3-2', '3-4', '4-1', '4-2', '4-3', '4-4', '1-11', '1-13', '2-10', '2-11', '2-12', '2-13', '3-11', '3-13', '4-10', '4-11', '4-12', '4-13', '10-2', '10-4', '11-1', '11-2', '11-3', '11-4', '12-2', '12-4', '13-1', '13-2', '13-3', '13-4', '10-11', '10-13', '11-10', '11-11', '11-12', '11-13', '12-11', '12-13', '13-10', '13-11', '13-12', '13-13'], // prettier-ignore
  colors: {p1:'blue',p2:'green',p3:'red',p4:'yellow'}
}

function createBoard() {
  var cells = [];
  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
      var pair = x + '-' + y;
      
      var expand = expandHomeCell(pair);
      
      var cellStyle = {
        backgroundColor: paintCell(pair),
        gridColumnStart: expand,
        gridRowStart: expand,
      };
      
      if (!boardData.excludedCells.includes(pair)) {
        cells.push(
          <div key={pair} style={cellStyle} className={'Cell div ' + pair}>
            {placeTokens(pair)}
          </div>
        );
      }
    }
  }
  return cells;
}

function paintCell(pair) {
  // for (var prop in playerData){
  //   if (boardData[prop].token.includes(pair)) {
  //     styleToken.backgroundColor = playerData[prop];
  //     nameButton = "Token "+prop+' ' + pair;
      
  //     buttonToken = <button style={styleToken} className={nameButton}></button>;
      
  //     return buttonToken;
  //   }
  // }
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

function expandHomeCell(pair) {
  if (boardData.expandableCells.includes(pair)) {
    return 'span 2';
  }
  return;
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
