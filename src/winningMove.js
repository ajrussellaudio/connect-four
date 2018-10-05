import { clone } from 'lodash';

import { transpose } from './manipulations';
import checkWin from './checkWin';

export default (board, token) => {
  const winningMoves = [];
  // for every column
  let boardByColumns = transpose(board);
  for (let i = 0; i < boardByColumns.length; i++) {
    // put token in first available slot
    for (let j = 0; j < boardByColumns[i].length; j++) {
      if (!boardByColumns[i][j]) {
        boardByColumns[i][j] = token;
        break;
      }
    }
    //   check whole board
    const result = checkWin(transpose(boardByColumns));
    //   if board is a win
    if (result.coords) {
      //   add column index to results
      winningMoves.push(i);
    }
    //   reset board
    boardByColumns = transpose(board);
  }
  return winningMoves;
};
