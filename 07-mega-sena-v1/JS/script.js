var state = {
  board: [],
  currentGame: [],
  savedGames: [],
};

function start() {};

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
  }

  state.currentGame.push(numberToAdd);
};

function isNumberInGame(numberToAdd){
  if(state.currentGame.includes(numberToAdd)){
    return true;
  }
  return false;
};

start();
