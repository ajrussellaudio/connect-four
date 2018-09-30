import { reverse } from './manipulations';
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
  const reversedBoard = reverse(board);
  return (
    horizontalWinDetails(reversedBoard, fourInARow) ||
    verticalWinDetails(reversedBoard, fourInARow) ||
    diagonalUpWinDetails(reversedBoard, fourInARow) ||
    diagonalDownWinDetails(reversedBoard, fourInARow) ||
    defaultDetails
  );
};
