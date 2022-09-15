const Gameboard = () => {
  const gameboard = [
    [0,0,0],[0,0,0],[0,0,0]
  ];
  const showBoard = () => {
    console.log(gameboard[0]);
    console.log(gameboard[1]);
    console.log(gameboard[2]);
    console.log('=======================');
  }
  const changeValue = (x,y,value) => {
    gameboard[x][y] = value;
  }
  return {
    showBoard,
    changeValue
  }
}

function Player (name) {

}

const board = Gameboard();
board.showBoard();
board.changeValue(1,1,'X');
board.showBoard();

