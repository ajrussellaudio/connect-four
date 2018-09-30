import { expect } from 'chai';

import { makeBoard, checkWin } from '../';

import { verticalRedVictory, horizontalYellowVictory } from './testBoards';

describe('checkWin', () => {
  describe.skip('vertical victory', () => {
    let board;

    beforeEach(() => {
      board = makeBoard(verticalRedVictory);
    });

    it('should return the winning colour', () => {
      const { colour } = checkWin(board);
      expect(colour).to.equal('R');
    });

    it('should return the coordinates of the winning line');
  });

  describe('horizontal victory', () => {
    let board;

    beforeEach(() => {
      board = makeBoard(horizontalYellowVictory);
    });

    it('should return the winning colour', () => {
      const { colour } = checkWin(board);
      expect(colour).to.equal('Y');
    });

    it('should return the coordinates of the winning line', () => {
      const { coords } = checkWin(board);
      expect(coords).to.eql([[0, 2], [0, 3], [0, 4], [0, 5]]);
    });
  });

  it('should return the winning colour, diagonal');
});
