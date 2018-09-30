import { transpose } from './manipulations';

export default board => {
  return horizontalWinDetails(board) || verticalWinDetails(board);
};

const horizontalWinDetails = board => {
  const details = {};
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        cell &&
        cell === row[columnIndex + 1] &&
        cell === row[columnIndex + 2] &&
        cell === row[columnIndex + 3]
      ) {
        details.colour = cell;
      }
    });
  });
  return details;
};

const verticalWinDetails = board => {
  const columns = transpose(board);
};
