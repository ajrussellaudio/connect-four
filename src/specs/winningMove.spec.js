import { expect } from 'chai';

import { emptyBoard, redNearVictory, yellowNearVictory } from './testBoards';
import makeBoard from '../makeBoard';

import winningMove from '../winningMove';

describe('winningMove', () => {
  it('returns empty array when no winning move possible', () => {
    const board = makeBoard(emptyBoard);
    expect(winningMove(board, 'R')).to.eql([]);
  });

  it('returns array of one column number when one winning move possible', () => {
    const board = makeBoard(redNearVictory);
    expect(winningMove(board, 'R')).to.eql([1]);
  });

  it('returns array of two column numbers when two winning moves possible', () => {
    const board = makeBoard(yellowNearVictory);
    expect(winningMove(board, 'Y')).to.eql([2, 6]);
  });
});
