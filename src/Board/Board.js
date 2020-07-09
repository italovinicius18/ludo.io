import React from 'react';
import './Board.css';

const p1Area = ['0-0', '0-1', '0-2', '0-3', '0-4', '0-5', '1-0', '1-5', '2-0', '2-5', '3-0', '3-5', '4-0', '4-5', '5-0', '5-1', '5-2', '5-3', '5-4', '5-5', '6-1', '7-1', '7-2', '7-3', '7-4', '7-5', '7-6']; // prettier-ignore
const p1Tokens = ['1-1', '1-3', '3-1', '3-3'];
const p2Area = ['9-0', '9-1', '9-2', '9-3', '9-4', '9-5', '10-0', '10-5', '11-0', '11-5', '12-0', '12-5', '13-0', '13-5', '14-0', '14-1', '14-2', '14-3', '14-4', '14-5', '13-6', '13-7', '12-7', '11-7', '10-7', '9-7', '8-7']; // prettier-ignore
const p2Tokens = ['1-10', '1-12', '3-10', '3-12'];
const p3Area = ['0-9', '0-10', '0-11', '0-12', '0-13', '0-14', '1-9', '1-14', '2-9', '2-14', '3-9', '3-14', '4-9', '4-14', '5-9', '5-10', '5-11', '5-12', '5-13', '5-14', '1-8', '1-7', '2-7', '3-7', '4-7', '5-7', '6-7']; // prettier-ignore
const p3Tokens = ['10-1', '10-3', '12-1', '12-3'];
const p4Area = ['9-9', '9-10', '9-11', '9-12', '9-13', '9-14', '10-9', '10-14', '11-9', '11-14', '12-9', '12-14', '13-9', '13-14', '14-9', '14-10', '14-11', '14-12', '14-13', '14-14', '8-13', '7-13', '7-12', '7-11', '7-10', '7-9', '7-8']; // prettier-ignore
const p4Tokens = ['10-10', '10-12', '12-10', '12-12'];
const expandableCells = ['1-1', '1-3', '3-1', '3-3', '1-10', '1-12', '3-10', '3-12', '10-1', '10-3', '12-1', '12-3', '10-10', '10-12', '12-10', '12-12']; // prettier-ignore
const excludedCells = ['1-2', '1-4', '2-1', '2-2', '2-3', '2-4', '3-2', '3-4', '4-1', '4-2', '4-3', '4-4', '1-11', '1-13', '2-10', '2-11', '2-12', '2-13', '3-11', '3-13', '4-10', '4-11', '4-12', '4-13', '10-2', '10-4', '11-1', '11-2', '11-3', '11-4', '12-2', '12-4', '13-1', '13-2', '13-3', '13-4', '10-11', '10-13', '11-10', '11-11', '11-12', '11-13', '12-11', '12-13', '13-10', '13-11', '13-12', '13-13']; // prettier-ignore

function paintCell(pair) {
  if (p1Area.includes(pair)) {
    return 'blue';
  } else if (p2Area.includes(pair)) {
    return 'green';
  } else if (p3Area.includes(pair)) {
    return 'red';
  } else if (p4Area.includes(pair)) {
    return 'yellow';
  }

  return 'white';
}

function expandHomeCell(pair) {
  if (expandableCells.includes(pair)) {
    return 'span 2';
  }
  return;
}

function placeTokens(pair) {
  var styleToken = {
    display: 'flex',
    backgroundColor: '',
    height: '60%',
    width: '60%',
    borderRadius: '50%'
  }

  var nameDiv;

  var divToken = <div style={styleToken} className={'p1Token' + pair}></div>;

  if (p1Tokens.includes(pair)) {
    styleToken.backgroundColor = 'blue';
    nameDiv = 'p1Token-' + pair;

    return divToken;
  } else if (p2Tokens.includes(pair)) {
    styleToken.backgroundColor = 'red';
    nameDiv = 'p2Token-' + pair;

    return divToken;
  } else if (p3Tokens.includes(pair)) {
    styleToken.backgroundColor = 'green';
    nameDiv = 'p3Token-' + pair;

    return divToken;
  } else if (p4Tokens.includes(pair)) {
    styleToken.backgroundColor = 'yellow';
    nameDiv = 'p4Token-' + pair;

    return divToken;
  }
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

      if (!excludedCells.includes(pair)) {
        cells.push(
          <div key={pair} style={cellStyle} className={'Cell div' + pair}>
            {placeTokens(pair)}
          </div>
        );
      }
    }
  }
  return cells;
}

function Board() {
  return <div className='Board'>{createBoard()}</div>;
}

export default Board;
