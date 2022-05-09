// DOM elements
const mainContent = document.querySelector('.main-content');
const playArea = document.querySelector('.play-area');


// Player factory
const player = (marker, playerNo) => {


    return {marker, playerNo};
};


//Gameboard module
const gameBoard = (() => {
    let gameBoardArray = [null, null, null, 
                          null, null, null,
                          null, null, null]

    // Need function to handle player moves


    // Export variables and functions
    return { gameBoardArray };
});



//Display controller module
const displayController = (() => {
    // function to draw the board
    const drawBoard = () => {
        for (let i = 0; i < 9; i++) {
            newCell = document.createElement('div');
            newCell.setAttribute('id', 'cell' + (i + 1));
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