export default boardString =>
  boardString
    .trim()
    .split('\n')
    .map(row =>
      row
        .trim()
        .replace(/[\[\]]/g, '')
        .split('')
        .map(cell => (cell === ' ' ? null : cell))
    );
