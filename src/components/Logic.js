import { boardData } from "./Data";
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
    if (inHome(id, playerData) && moves !== 6) { // Condition verify if the player got out the home
      return;
    }

    if (inHome(id, playerData) && moves === 6) { // Condition to take the layer token and make it get out home
      token.remove();
      nextPosition = playerData.path[0];
      forwardDiv = board.getElementsByClassName(nextPosition)[0];
      forwardDiv.appendChild(storagedToken);
    } else if (!inHome(id, playerData)) {
      //verify if the token isnt in home and if the token belongs to the owner of the round
      currentPosition = playerData.path.indexOf(id);

      if (currentPosition + moves >= playerData.path.length){
        roundsDone.add(rounds);
        return;
      }
      
      nextPosition = playerData.path[currentPosition + moves];
      forwardDiv = board.getElementsByClassName(nextPosition)[0];
      forwardDiv.appendChild(storagedToken);

      catchPlayer(forwardDiv, storagedToken, board)

    }

    downSizeTokens(board)

    verifyWinner(playerData, board)

    roundsDone.add(rounds);
  }
}

function catchPlayer(forwardDiv, storagedToken, board) {
  //Implement the expception to homeDoor and the end of the path

  var forwardDivId = forwardDiv.className.split(' ')[2]; 

  if(boardData.homeDoor.includes(forwardDivId)){
    return;
  }

  var forwardTokens = forwardDiv.children;


  if (forwardTokens.length > 1) {
    var currentPlayer = storagedToken.className.split(" ")[1];

    var forwardToken = Array.from(forwardTokens).filter((token) => {
      return !token.className.includes(currentPlayer);
    })[0];

    if(!forwardToken){
      return
    }

    var forwardPlayer = forwardToken.className.split(' ')[1]

    if (currentPlayer !== forwardPlayer) {
      var homeDivId = forwardToken.className.split(" ")[2];

      var homeDiv = Array.from(board.getElementsByClassName(homeDivId)).filter((element) => {
        return element.className.includes('div');
      })[0];

      var storagedForwardToken = forwardToken;
      forwardToken.remove();

      homeDiv.appendChild(storagedForwardToken);
    }
  }
}

function verifyWinner(playerData, board){
  var lastPosition = playerData.path[playerData.path.length - 1];
  var lastDiv = board.getElementsByClassName(lastPosition)[0];
  if(lastDiv.children.length === 4){
    console.log(playerData + 'WON')
  }
}

function downSizeTokens(board){
  var cells = board.children
  var content,token;
  Array.from(cells).forEach((cell) => {
    if(cell.children.length > 1){
      content = cell.children;
      var contentSize = content.length;
      var eachPosition = 24/contentSize;
      Array.from(content).forEach((token)=>{
        token.style.height = eachPosition+5+'px'
        token.style.width = eachPosition+5+'px'
      })
    }
    if(cell.children.length === 1){
      content = cell.children;
      token = content[0]
      if(cell.className.includes('expanded')){
        token.style.height = 40+'px'
        token.style.width = 40+'px'
      }else{
        token.style.height = 24+'px'
        token.style.width = 24+'px'
      }
    }
  })

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
