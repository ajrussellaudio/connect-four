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

    it('should return the coordinates of the winning line');
  });

  it('should return the winning colour, diagonal');
});
