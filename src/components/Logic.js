export function game(round, moves, boardData) {
  var board = document.querySelector(".Board");
  if (moves === 6) {
    setClickableTokens(board, round, moves, boardData);
  }
}

function setClickableTokens(board, round, moves, boardData) {
  if (round === 1) {
    var p1Tokens = Array.from(board.getElementsByClassName("p1"));
    p1Tokens.forEach((token) => {
        token.onclick = function() {moveToken(token, round, moves, boardData)}
    });
  } else if (round === 2) {
    var p2Tokens = Array.from(board.getElementsByClassName("p2"));
    p2Tokens.forEach((token) => {
        token.onclick = function() {moveToken(token, round, moves, boardData)}
    });
  } else if (round === 3) {
    var p3Tokens = Array.from(board.getElementsByClassName("p3"));
    p3Tokens.forEach((token) => {
        token.onclick = function() {moveToken(token, round, moves, boardData)}
    });
  } else if (round === 4) {
    var p4Tokens = Array.from(board.getElementsByClassName("p4"));
    p4Tokens.forEach((token) => {
        token.onclick = function() {moveToken(token, round, moves, boardData)}
    });
  }
}

function moveToken(token, round, moves, boardData) {
    console.log(token,boardData)

    // if(!boardData.+player+.path){

    // }else{

    // }

}


