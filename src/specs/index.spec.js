import { expect } from 'chai';

import { makeBoard } from '../';

import { boardFromBrief } from './testBoards';

describe('checkWin', () => {
  it('should return the winning colour');
  it('should return the coordinates of the winning line');
});

describe('makeBoard', () => {
  it('converts a string representing a board to an array of arrays', () => {
    const boardArrays = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, 'R', null, null],
      [null, null, null, 'R', 'Y', 'Y', null],
      [null, null, 'R', 'Y', 'R', 'Y', null],
      [null, 'R', 'Y', 'Y', 'R', 'Y', 'R']
    ];
    expect(makeBoard(boardFromBrief)).to.eql(boardArrays);
  });
});
