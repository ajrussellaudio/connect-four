import { transpose, reverse } from './manipulations';
import { zip, zipWith, range } from 'lodash';

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

const fourInARow = cells =>
  cells.join('') === 'RRRR' || cells.join('') === 'YYYY';

const horizontalWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const nextFourCells = row.slice(columnIndex, columnIndex + 4);
      if (fourInARow(nextFourCells)) {
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

const verticalWinDetails = board => {
  let details;
  transpose(board).forEach((column, columnIndex) => {
    column.forEach((cell, rowIndex) => {
      const nextFourCells = column.slice(rowIndex, rowIndex + 4);
      if (fourInARow(nextFourCells)) {
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

const diagonalUpWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        rowIndex < 3 &&
        fourInARow([
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

const diagonalDownWinDetails = board => {
  let details;
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (
        rowIndex >= 3 &&
        fourInARow([
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
