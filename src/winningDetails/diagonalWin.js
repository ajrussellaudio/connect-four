import { zip, range } from 'lodash';

export const diagonalUpWinDetails = (board, win) => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        rowIndex < 3 &&
        win([
          cell,
          board[rowIndex + 1][columnIndex + 1],
          board[rowIndex + 2][columnIndex + 2],
          board[rowIndex + 3][columnIndex + 3]
        ])
      ) {
        details = {
          colour: cell,
          coords: zip(
            range(rowIndex, rowIndex + 4),
            range(columnIndex, columnIndex + 4)
          )
        };
      }
    });
  });
  return details;
};

export const diagonalDownWinDetails = (board, win) => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        rowIndex >= 3 &&
        win([
          cell,
          board[rowIndex - 1][columnIndex + 1],
          board[rowIndex - 2][columnIndex + 2],
          board[rowIndex - 3][columnIndex + 3]
        ])
      ) {
        details = {
          colour: cell,
          coords: zip(
            range(rowIndex, rowIndex - 4, -1),
            range(columnIndex, columnIndex + 4)
          )
        };
      }
    });
  });
  return details;
};
