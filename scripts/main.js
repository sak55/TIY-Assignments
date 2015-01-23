
    var board = [
        ['0','1','2','3','4','5','6','7','8'],
        ['1','R','N','B','Q','K','B','N','R'],
        ['2','P','P','P','P','P','P','P','P'],
        ['3',' ',' ',' ',' ',' ',' ',' ',' '],
        ['4',' ',' ',' ',' ',' ',' ',' ',' '],
        ['5',' ',' ',' ',' ',' ',' ',' ',' '],
        ['6',' ',' ',' ',' ',' ',' ',' ',' '],
        ['7','p','p','p','p','p','p','p','p'],
        ['8','r','n','b','q','k','b','n','r'],
    ];
function print(board){
    console.log(board.join('\n') + '\n\n')
}

function move(fromY, fromX, toY, toX){
        board[toY][toX] = board[fromY][fromX];
        board[fromY][fromX] = ' ';

    //    console.log(board.join('\n'));
        print(board);
    }

//move(7, 5, 5, 5);
//move(2, 1, 4, 1);


////Move King's Pawn forward 2
//board[5][5] = board[7][5];
//board[7][5] = ' ';
//
//console.log(board.join('\n'));
//
//board[4][1] = board[2][1];
//board[2][1] = ' ';
//
//console.log(board.join('\n'));
//
//board[6][8] = board[7][8];
//board[7][8] = ' ';
//
//console.log(board.join('\n'));



