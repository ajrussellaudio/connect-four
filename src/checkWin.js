import { transpose, reverse } from './manipulations';

export default board => {
  const reversedBoard = reverse(board);
  return (
    horizontalWinDetails(reversedBoard) || verticalWinDetails(reversedBoard)
  );
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
        details.coords = [
          [rowIndex, columnIndex],
          [rowIndex, columnIndex + 1],
          [rowIndex, columnIndex + 2],
          [rowIndex, columnIndex + 3]
        ];
      }
    });
  });
  return details;
};

const verticalWinDetails = board => {
  const columns = transpose(board);
};
