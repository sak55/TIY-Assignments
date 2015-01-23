var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'],
];

console.log(board.join('\n') + '\n\n')

//Move King's Pawn forward 2

function print(board) {
    board[4][4] = board[6][4];
}

function move(board, fromX, fromY, toX, toY) {
    board[6][4] = ' ';
    console.log(board.join('\n'));
}