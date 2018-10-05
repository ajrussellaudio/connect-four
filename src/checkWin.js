import {
  horizontalWinDetails,
  verticalWinDetails,
  diagonalUpWinDetails,
  diagonalDownWinDetails
} from './winningDetails';

const fourInARow = cells =>
  cells.join('') === 'RRRR' || cells.join('') === 'YYYY';

export default board => {
  const defaultDetails = {
    colour: null,
    coords: null
  };
  return (
    horizontalWinDetails(board, fourInARow) ||
    verticalWinDetails(board, fourInARow) ||
    diagonalUpWinDetails(board, fourInARow) ||
    diagonalDownWinDetails(board, fourInARow) ||
    defaultDetails
  );
};
