import { zipWith, range } from 'lodash';
import { transpose } from '../manipulations';

export const verticalWinDetails = (board, win) => {
  let details;
  transpose(board).forEach((column, columnIndex) => {
    column.forEach((cell, rowIndex) => {
      const nextFourCells = column.slice(rowIndex, rowIndex + 4);
      if (win(nextFourCells)) {
        details = {
          colour: cell,
          coords: zipWith(range(rowIndex, rowIndex + 4), rowIndex => [
            rowIndex,
            columnIndex
          ])
        };
      }
    });
  });
  return details;
};
