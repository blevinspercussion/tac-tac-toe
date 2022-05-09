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
        for (cell in gameBoardArray) {

        }
    }

    // Need function to update the board after player move

    // Export variables and functions
});



///////////////////////////////////
//// Event handlers
///////////////////////////////////




// Execute the game