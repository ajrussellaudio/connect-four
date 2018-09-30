import { transpose, reverse } from './manipulations';

export default board => {
  const defaultDetails = {
    colour: null,
    coords: null
  };
  const reversedBoard = reverse(board);
  return (
    horizontalWinDetails(reversedBoard) ||
    verticalWinDetails(reversedBoard) ||
    diagonalUpWinDetails(reversedBoard) ||
    diagonalDownWinDetails(reversedBoard) ||
    defaultDetails
  );
};

const horizontalWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        cell &&
        cell === row[columnIndex + 1] &&
        cell === row[columnIndex + 2] &&
        cell === row[columnIndex + 3]
      ) {
        details = {
          colour: cell,
          coords: [
            [rowIndex, columnIndex],
            [rowIndex, columnIndex + 1],
            [rowIndex, columnIndex + 2],
            [rowIndex, columnIndex + 3]
          ]
        };
      }
    });
  });
  return details;
};

const verticalWinDetails = board => {
  let details;
  transpose(board).forEach((column, columnIndex) => {
    column.forEach((cell, rowIndex) => {
      if (
        cell &&
        cell === column[rowIndex + 1] &&
        cell === column[rowIndex + 2] &&
        cell === column[rowIndex + 3]
      ) {
        details = {
          colour: cell,
          coords: [
            [rowIndex, columnIndex],
            [rowIndex + 1, columnIndex],
            [rowIndex + 2, columnIndex],
            [rowIndex + 3, columnIndex]
          ]
        };
      }
    });
  });
  return details;
};

const diagonalUpWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        cell &&
        cell === board[rowIndex + 1][columnIndex + 1] &&
        cell === board[rowIndex + 2][columnIndex + 2] &&
        cell === board[rowIndex + 3][columnIndex + 3]
      ) {
        details = {
          colour: cell,
          coords: [
            [rowIndex, columnIndex],
            [rowIndex + 1, columnIndex + 1],
            [rowIndex + 2, columnIndex + 2],
            [rowIndex + 3, columnIndex + 3]
          ]
        };
      }
    });
  });
  return details;
};

const diagonalDownWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        rowIndex >= 3 &&
        cell &&
        cell === board[rowIndex - 1][columnIndex + 1] &&
        cell === board[rowIndex - 2][columnIndex + 2] &&
        cell === board[rowIndex - 3][columnIndex + 3]
      ) {
        details = {
          colour: cell,
          coords: [
            [rowIndex, columnIndex],
            [rowIndex - 1, columnIndex + 1],
            [rowIndex - 2, columnIndex + 2],
            [rowIndex - 3, columnIndex + 3]
          ]
        };
      }
    });
  });
  return details;
};
