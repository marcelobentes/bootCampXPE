var state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {
  createBoard();
  newGame();
  
};

function createBoard(){
  state.board = [];

  for(let i = 1; i <= 60; i++){
    state.board.push(i);
  }

}

function newGame(){
  resetGame();
  render();
}

function render(){
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard(){
  var divBoard = document.querySelector('#megasena-numbers');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');

  for (var i = 0; i < state.board.length; i++){
    var currentNumber = state.board[i];

    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.addEventListener('click', handleNumberClick);

    ulNumbers.appendChild(liNumber);

  }
  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event){
  var value = Number(event.currentTarget.textContent);
  if(isNumberInGame(value)){
    removeNumberFromGame(value);
  }else {
    addNumberToGame(value);
  }
}

function renderButtons(){

  renderNewGamesButton();
  renderRandomGamesButton();
  renderSavedGamesButton();

  var divButtons = document.querySelector('#megasena-buttons');
  divButtons.innerHTML = '';

  var buttonNewGame = createNewGameButton();
  divButtons.appendChild(buttonNewGame);
}

function createNewGameButton(){
  var button = document.createElement('button');
  button.textContent = 'Novo Jogo';

  button.addEventListener('click', newGame);
  return button;
}

function renderSavedGames(){

}

function renderNewGamesButton(){

}

function renderRandomGamesButton(){

}

function renderSavedGamesButton(){

}
<!--função de adicionar numero -->
function addNumberToGame(numberToAdd){
  if(numberToAdd < 1 || numberToAdd > 60){
    console.error('Numero inválido', numberToAdd);
    return;
  }
  if (state.currentGame.length >=6){
    console.error('O jogo ja esta completo.');
    return;
  }
  if (isNumberInGame(numberToAdd)){
    console.error('Este numero ja esta no jogo.', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
};

function removeNumberFromGame(numberRemove){
  if(numberRemove < 1 || numberRemove > 60){
    console.error('Numero inválido', numberRemove);
    return;
  }
  let newGame = [];

  for( let i = 0; i < state.currentGame.length; i++){
    var currentNumber = state.currentGame[i];
    if(currentNumber === numberRemove){
      continue;
    }
    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck){
  
  return state.currentGame.includes(numberToCheck);
};

function isGameComplete(){
  return state.currentGame.length === 6;
}
function savedGames(){
  if(!isGameComplete()){
    console.error('O jogo não esta completo');
    return;
  }

  state.savedGames.push(state.currentGame);
}
function resetGame (){
  state.currentGame = [];
}
start();
