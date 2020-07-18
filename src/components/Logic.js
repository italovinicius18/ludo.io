var roundsDone = new Set();

export function game(playerRound, rounds,moves, boardData) {
  var board = document.querySelectorAll('.Board')[0];
  setClickableTokens(board, playerRound, rounds, moves, boardData);
}

function setClickableTokens(board, playerRound, rounds, moves, boardData) {
  var TokensInBoard = Array.from(board.getElementsByClassName("Token"));
  TokensInBoard.forEach((token) => {
    var player = token.className.split(" ")[1];
    token.onclick = function () {
      moveToken(board, token, playerRound, rounds, moves, boardData[player], player);
    };
  });
}

function moveToken(board, token, playerRound, rounds, moves, playerData, player) {
  var storagedToken = token,
    nextPosition,
    div,
    currentPosition,
    id = storagedToken.parentNode.className.split(" ")[2];

  if (player[1] === playerRound.toString() && !roundsDone.has(rounds)) {
    if (inHome(id, playerData) && moves !== 6){
      return
    }
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
    roundsDone.add(rounds)
  }


  console.log(roundsDone)

}

function inHome(id, playerData) {
  return !playerData.path.includes(id);
}
