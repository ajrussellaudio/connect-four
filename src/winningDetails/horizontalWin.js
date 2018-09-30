import { zipWith, range } from 'lodash';

export const horizontalWinDetails = (board, win) => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const nextFourCells = row.slice(columnIndex, columnIndex + 4);
      if (win(nextFourCells)) {
        details = {
          colour: cell,
          coords: zipWith(range(columnIndex, columnIndex + 4), columnIndex => [
            rowIndex,
            columnIndex
          ])
        };
      }
    });
  });
  return details;
};
