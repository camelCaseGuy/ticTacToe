const gameboardFactory = () => {
  const gameboard = [
    ['','',''],['','',''],['','','']
  ];

  const getBoard = () => gameboard;
  
  const showBoard = () => {
    console.log(gameboard[0]);
    console.log(gameboard[1]);
    console.log(gameboard[2]);
    console.log('=======================');

    const containerDiv = document.getElementById('container');

    gameboard.forEach(row => {
      row.forEach(item => {
        const elemDiv = document.createElement('div');
        elemDiv.innerHTML = item;
        elemDiv.classList.add('card')
        containerDiv.appendChild(elemDiv)
      })
    });
  }
  const changeValue = (x,y,value) => {
    gameboard[x][y] = value;
  }
  return {
    showBoard,
    changeValue
  }
};

function playerFactory (name) {
  const greeting = () => `Hi, ${name}!`;
  return {
    greeting
  }
}

const playerOne = playerFactory();
const playerTwo = playerFactory();



let game = gameboardFactory();
game.showBoard();


