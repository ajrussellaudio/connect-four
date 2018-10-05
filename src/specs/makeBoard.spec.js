import { expect } from 'chai';

import { makeBoard } from '../';

import { diagonalUpwardsRedVictory } from './testBoards';

describe('makeBoard', () => {
  it('converts a string representing a board to an array of arrays', () => {
    const boardArrays = [
      [null, 'R', 'Y', 'Y', 'R', 'Y', 'R'],
      [null, null, 'R', 'Y', 'R', 'Y', null],
      [null, null, null, 'R', 'Y', 'Y', null],
      [null, null, null, null, 'R', null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];
    expect(makeBoard(diagonalUpwardsRedVictory)).to.eql(boardArrays);
  });
});
