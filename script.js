// DOM elements
const mainContent = document.querySelector('.main-content');
const playArea = document.querySelector('.play-area');

// Player factory
const player = (marker, playerNo) => {


    return {marker, playerNo};
};
// Global variables

// Create Players 
let playerOne = player('X', 'One');
let playerTwo = player('O', 'Two');

let activePlayer = playerOne;





//Gameboard module
const gameBoard = (() => {
    let gameBoardArray = [null, null, null, 
                          null, null, null,
                          null, null, null]

    // Need function to handle player moves
    


    // Need function to create event listeners

    const cellEventListeners = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {

                if (cell.textContent === '') {
                    cell.textContent = activePlayer.marker;
                    if (activePlayer === playerOne) {
                        activePlayer = playerTwo;
                    } else {
                        activePlayer = playerOne;
                };

                };



                
            });
        });
    };

    // Export variables and functions
    return { gameBoardArray, cellEventListeners };
})();

// Controls the flow of the game
const gameController = (() => {


})();



//Display controller module
const displayController = (() => {
    // function to draw the board
    const drawBoard = () => {
        for (let i = 0; i < 9; i++) {
            let newCell = document.createElement('div');
            newCell.setAttribute('id', 'cell' + (i + 1));
            newCell.classList.add('cell');
            playArea.appendChild(newCell);
            
        };
    };

    // Need function to update the board after player move

    // Export variables and functions
    return { drawBoard };
})();



///////////////////////////////////
//// Event handlers
///////////////////////////////////




// Execute the game

displayController.drawBoard();
gameBoard.cellEventListeners();