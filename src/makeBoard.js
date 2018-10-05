import { reverse } from './manipulations';

export default boardString =>
  reverse(
    boardString
      .trim()
      .split('\n')
      .map(row =>
        row
          .trim()
          .replace(/[\[\]]/g, '')
          .split('')
          .map(cell => (cell === ' ' ? null : cell))
      )
  );
