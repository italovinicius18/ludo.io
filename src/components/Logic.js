import { boardData } from "./Data";
const homeDoor = ["6-1", "1-8", "8-13", "13-6"];
var roundsDone = new Set();

export function game(playerRound, rounds, moves) {
  var board = document.querySelectorAll(".Board")[0];
  setClickableTokens(board, playerRound, rounds, moves);
}

// This game won't permit that same players stay in the same place, except in the door of the home places
// So i wil return a list of moves that player can move

export function verifyPlaces(playerRound) {
  var board = document.querySelectorAll(".Board")[0];
  var currentPositions = [];
  var currentPlayer = "p" + playerRound;
  var pathPlayer = boardData[currentPlayer].path;
  var tokens = board.getElementsByClassName(currentPlayer);

  var tokensPositions = Array.from(tokens).map((element) => {
    return element.parentNode.className.split(" ")[2];
  });

  tokensPositions.forEach((element) => {
    var indexId = pathPlayer.indexOf(element);
    if (indexId !== -1) {
      currentPositions.push(indexId);
    }
  });

  var availableRandomNumbers = [];

  currentPositions.forEach((element) => {
    var possibilities = [];
    for (let i = 1; i < 7; i++) {
      if (!currentPositions.includes(i + element)) {
        possibilities.push(i);
      }
    }
    availableRandomNumbers.push(possibilities);
  });

  return intersection(availableRandomNumbers);
}

function setClickableTokens(board, playerRound, rounds, moves) {
  var TokensInBoard = Array.from(board.getElementsByClassName("Token"));
  TokensInBoard.forEach((token) => {
    var player = token.className.split(" ")[1];
    token.onclick = function () {
      moveToken(
        board,
        token,
        playerRound,
        rounds,
        moves,
        boardData[player],
        player
      );
    };
  });
}

function inHome(id, playerData) {
  return !playerData.path.includes(id);
}

function moveToken(
  board,
  token,
  playerRound,
  rounds,
  moves,
  playerData,
  player
) {
  var storagedToken = token,
    nextPosition,
    forwardDiv,
    currentPosition,
    id = storagedToken.parentNode.className.split(" ")[2];

  if (player[1] === playerRound.toString() && !roundsDone.has(rounds)) {
    if (inHome(id, playerData) && moves !== 6) {
      return;
    }
    if (inHome(id, playerData) && moves === 6) {
      token.remove();
      nextPosition = playerData.path[0];
      forwardDiv = board.getElementsByClassName(nextPosition)[0];
      forwardDiv.appendChild(storagedToken);
    } else if (!inHome(id, playerData)) {
      //verify if the token isnt in home and if the token belongs to the owner of the round
      currentPosition = playerData.path.indexOf(id);
      nextPosition = playerData.path[currentPosition + moves];
      forwardDiv = board.getElementsByClassName(nextPosition)[0];
      // catchPlayer(forwardDiv, storagedToken ,board);
      forwardDiv.appendChild(storagedToken);
    }
    roundsDone.add(rounds);
  }
}

function catchPlayer(forwardDiv, storagedToken, board) {
  //Implement the expception to homeDoor and the end of the path

  var forwardToken = forwardDiv.children;
  if (forwardToken.length > 0) {
    var currentPlayer = storagedToken.className.split(" ")[1];
    var forwardPlayer = forwardToken[0].className.split(" ")[1];

    if (currentPlayer !== forwardPlayer) {
      var homeDivId = forwardToken.className.split(" ")[2];
      var homeDiv = board.getElementsByClassName(homeDivId)[0];

      var storagedForwardToken = forwardToken;
      forwardToken.remove();

      homeDiv.appendChild(storagedForwardToken);
    }
  }
}

function intersection() {
	var result = [];
  var lists;
  
  if(arguments.length === 1) {
  	lists = arguments[0];
  } else {
  	lists = arguments;
  }
  
  for(var i = 0; i < lists.length; i++) {
  	var currentList = lists[i];
  	for(let y = 0; y < currentList.length; y++) {
    	let currentValue = currentList[y];
      if(result.indexOf(currentValue) === -1) {
        var listIntersection = lists.filter((obj) => { 
          return obj.indexOf(currentValue) === -1;
         })
        if(listIntersection.length === 0) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
}
