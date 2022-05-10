// DOM elements
const mainContent = document.querySelector('.main-content');
const playArea = document.querySelector('.play-area');
const newGameButton = document.querySelector('.new-game-button');

// Player factory
const player = (marker, playerNo) => {


    return {marker, playerNo};
};
// Global variables

// Create Players 
let playerOne = player('X', 'One');
let playerTwo = player('O', 'Two');

let winner;

let activePlayer = playerOne;





//Gameboard module
const gameBoard = (() => {
    let gameBoardArray = ['', '', '', 
                          '', '', '',
                          '', '', '']

    // Need function to create event listeners

    const cellEventListeners = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {

                if (cell.textContent === '') {
                    cell.textContent = activePlayer.marker;
                    gameBoard.updateGameboardArray();
                    console.log(gameBoard.gameBoardArray);
                    gameBoard.checkWin();
                    if (activePlayer === playerOne) {
                        activePlayer = playerTwo;
                    } else {
                        activePlayer = playerOne;
                };

                };              
            });
        });
    };

    // Updates gameBoard array
    const updateGameboardArray = () => {
        for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
            gameBoard.gameBoardArray[i] = document.getElementById('cell' + i).textContent;
        };

    };

    // Checks to see if there is a winner
    const checkWin = () => {
        if (gameBoard.gameBoardArray[0] != '') {
            if ((gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[1] && gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[2]) ||
                (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[4] && gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[8]) ||
                (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[3] && gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[6])) {
                console.log(`Player ${activePlayer.playerNo} wins!`);
                console.log('0');
                displayController.destroyGameBoard();
            };
        }; 
        
        
        if (gameBoard.gameBoardArray[1] != '') {
            if (gameBoard.gameBoardArray[1] === gameBoard.gameBoardArray[4] && gameBoard.gameBoardArray[1] === gameBoard.gameBoardArray[7]) {
                console.log(`Player ${activePlayer.playerNo} wins!`);
                console.log('1');
                displayController.destroyGameBoard();
            };
            
        };
        
        if (gameBoard.gameBoardArray[2] != '') {
            if ((gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[4] && gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[6]) || 
                (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[5] && gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[8])) {
                console.log(`Player ${activePlayer.playerNo} wins!`);
                console.log('2');
                displayController.destroyGameBoard();
            };
            
        };
        
        if (gameBoard.gameBoardArray[3] != '') {
            if (gameBoard.gameBoardArray[3] === gameBoard.gameBoardArray[4] && gameBoard.gameBoardArray[3] === gameBoard.gameBoardArray[5]) {
                console.log(`Player ${activePlayer.playerNo} wins!`);
                console.log(3);
                displayController.destroyGameBoard();
            };
            
        };
        if (gameBoard.gameBoardArray[6] != '') {
            if (gameBoard.gameBoardArray[6] === gameBoard.gameBoardArray[7] && gameBoard.gameBoardArray[6] === gameBoard.gameBoardArray[8]) {
                console.log(`Player ${activePlayer.playerNo} wins!`);
                console.log('6');
                displayController.destroyGameBoard();
            };
        };
        
    };

    // Export variables and functions
    return { gameBoardArray, cellEventListeners, checkWin, updateGameboardArray };
})();

// Controls the flow of the game
// const gameController = (() => {


// })();



//Display controller module
const displayController = (() => {
    // function to draw the board
    const drawBoard = () => {
        for (let i = 0; i < 9; i++) {
            let newCell = document.createElement('div');
            newCell.setAttribute('id', 'cell' + i);
            newCell.classList.add('cell');
            playArea.appendChild(newCell);
            
        };
    };

    const destroyGameBoard = () => {
        cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.remove();
        });
        gameBoard.gameBoardArray = ['', '', '', '', '', '', '', '', '']
    };


    // Export variables and functions
    return { drawBoard, destroyGameBoard };
})();



///////////////////////////////////
//// Event handlers
///////////////////////////////////

newGameButton.addEventListener('click', () => {
    displayController.drawBoard();
    gameBoard.cellEventListeners();
})


// Execute the game

// displayController.drawBoard();
// gameBoard.cellEventListeners();
