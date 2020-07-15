export function game(round, moves, boardData) {
  var board = document.querySelector(".Board");
  setClickableTokens(board, round, moves, boardData);
}

function setClickableTokens(board, round, moves, boardData) {
  if (round === 1) {
    var p1TokensInBoard = Array.from(board.getElementsByClassName("p1"));
    p1TokensInBoard.forEach((token) => {
      token.onclick = function () {
        moveToken(board, token, round, moves, boardData.p1);
      };
    });
  } else if (round === 2) {
    var p2TokensInBoard = Array.from(board.getElementsByClassName("p2"));
    p2TokensInBoard.forEach((token) => {
      token.onclick = function () {
        moveToken(board, token, round, moves, boardData.p2);
      };
    });
  } else if (round === 3) {
    var p3TokensInBoard = Array.from(board.getElementsByClassName("p3"));
    p3TokensInBoard.forEach((token) => {
      token.onclick = function () {
        moveToken(board, token, round, moves, boardData.p3);
      };
    });
  } else if (round === 4) {
    var p4TokensInBoard = Array.from(board.getElementsByClassName("p4"));
    p4TokensInBoard.forEach((token) => {
      token.onclick = function () {
        moveToken(board, token, round, moves, boardData.p4);
      };
    });
  }
}

function moveToken(board, token, round, moves, playerData) {
  let storagedToken = token,
    nextPosition,
    div,
    currentPosition,
    id = storagedToken.parentNode.className.split(" ")[2];

  console.log(inHome(id, playerData), moves);

  if (inHome(id, playerData) && moves === 6) {
    token.remove();
    nextPosition = playerData.path[0];
    div = board.getElementsByClassName(nextPosition)[0];
    div.appendChild(storagedToken);
  } 
  else if(!inHome(id, playerData)){
    currentPosition = playerData.path.indexOf(id);
    nextPosition = playerData.path[currentPosition + moves];

    div = board.getElementsByClassName(nextPosition)[0];
    div.appendChild(storagedToken);
  }
}

function inHome(id, playerData) {
  console.log(id);
  return !playerData.path.includes(id);
}
