export function game(round, moves, boardData) {
  var board = document.querySelectorAll('.Board')[0];
  setClickableTokens(board, round, moves, boardData);
}

function setClickableTokens(board, round, moves, boardData) {
  console.log(round);
  var TokensInBoard = Array.from(board.getElementsByClassName("Token"));
  TokensInBoard.forEach((token) => {
    var player = token.className.split(" ")[1];
    token.onclick = function () {
      moveToken(board, token, round, moves, boardData[player],player);
    };
  });
}

function moveToken(board, token, round, moves, playerData, player) {
  let storagedToken = token,
    nextPosition,
    div,
    currentPosition,
    id = storagedToken.parentNode.className.split(" ")[2];

  console.log(inHome(id, playerData), moves);

  console.log(player[1], round.toString());

  if (player[1] === round.toString()) {
    if (inHome(id, playerData) && moves === 6) {
      token.remove();
      nextPosition = playerData.path[0];
      div = board.getElementsByClassName(nextPosition)[0];
      div.appendChild(storagedToken);
    } else if (!inHome(id, playerData)) {
      //verify if the token isnt in home and if the token belongs to the owner of the round
      currentPosition = playerData.path.indexOf(id);
      nextPosition = playerData.path[currentPosition + moves];

      div = board.getElementsByClassName(nextPosition)[0];
      div.appendChild(storagedToken);
    }
  }
}

function inHome(id, playerData) {
  console.log(id);
  return !playerData.path.includes(id);
}
