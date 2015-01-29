var _= require('lodash');

function print(board){
  // Before any rows are printed, print the `<table>`...
    
    console.log('<table>class="chessboard"><tbody><tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th></tr>');
    for (counter = 8; counter > 0; counter--) {
        var row = ['<td class=',color1,'></td><td class=',color2,'></td><td class=',color1,'></td><td class=',color2,'></td><td class=',color1,'></td><td class=',color2,'></td><td class=',color2,'></td><td class=',color2,'>'], 
            color1, 
            color2;
        console.log('<tr><th>', counter, '</th>');
        if (counter % 2 === 0) {
            color1 = "light";
            color2 = "dark";
            console.log(row);}
        else {
            color1 = "dark";
            color2 = "light";
            console.log(row);}
        console.log('</td></tr>');};
    console.log('</tbody></table>');    
    };
    
print();

// _.forEach(board, function(row, rank){
//
//      // Before any cells are printed...
//
//      _.forEach(row, function(square, file){
//
//          // In here, we have `rank`, `file`, and `square`...
//
//      }); // END foreach(row)
//
//      // After all the cells are printed...
//
//  }); // END foreach(board)
//
//  // After all the rows are printed...
//  console.log('</table> <!-- .chessboard -->');
//} // END print

    
//    console.log('<table class="chessboard">');
//            <tbody>
//                <tr>
//                    <th></th>
//                    <th>a</th>
//                    <th>b</th>
//                    <th>c</th>
//                    <th>d</th>
//                    <th>e</th>
//                    <th>f</th>
//                    <th>g</th>
//                    <th>h</th>
//                </tr>
//                <tr>
//                    <th>8</th>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                </tr>
//                <tr>
//                    <th>7</th>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                </tr>
//                <tr>
//                    <th>6</th>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                </tr>
//                <tr>
//                    <th>5</th>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                </tr>
//                <tr>
//                    <th>4</th>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                </tr>
//                <tr>
//                    <th>3</th>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                </tr>
//                <tr>
//                    <th>2</th>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                </tr>
//                <tr>
//                    <th>1</th>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                    <td class="dark"></td>
//                    <td class="light"></td>
//                </tr>
//            </tbody>
//        </table>');
                    
 
//
//    var board = [
//        ['0','1','2','3','4','5','6','7','8'],
//        ['1','R','N','B','Q','K','B','N','R'],
//        ['2','P','P','P','P','P','P','P','P'],
//        ['3',' ',' ',' ',' ',' ',' ',' ',' '],
//        ['4',' ',' ',' ',' ',' ',' ',' ',' '],
//        ['5',' ',' ',' ',' ',' ',' ',' ',' '],
//        ['6',' ',' ',' ',' ',' ',' ',' ',' '],
//        ['7','p','p','p','p','p','p','p','p'],
//        ['8','r','n','b','q','k','b','n','r'],
//    ];
//function print(board){
//    console.log(board.join('\n') + '\n\n')
//}
//
//function move(fromY, fromX, toY, toX){
//        board[toY][toX] = board[fromY][fromX];
//        board[fromY][fromX] = ' ';
//
//    //    console.log(board.join('\n'));
//        print(board);
//    }
//
//
////move(7, 5, 5, 5);
//move(2, 1, 4, 1);
//
//
//////Move King's Pawn forward 2
////board[5][5] = board[7][5];
////board[7][5] = ' ';
////
////console.log(board.join('\n'));
////
////board[4][1] = board[2][1];
////board[2][1] = ' ';
////
////console.log(board.join('\n'));
////
////board[6][8] = board[7][8];
////board[7][8] = ' ';
////
////console.log(board.join('\n'));
//
//
//
