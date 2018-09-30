import { expect } from 'chai';

import { makeBoard, checkWin } from '../';

import {
  verticalRedVictory,
  horizontalYellowVictory,
  diagonalUpwardsRedVictory,
  diagonalDownwardsYellowVictory
} from './testBoards';

describe('checkWin', () => {
  describe('vertical victory', () => {
    let board;

    beforeEach(() => {
      board = makeBoard(verticalRedVictory);
    });

    it('should return the winning colour', () => {
      const { colour } = checkWin(board);
      expect(colour).to.equal('R');
    });

    it('should return the coordinates of the winning line', () => {
      const { coords } = checkWin(board);
      expect(coords).to.eql([[0, 1], [1, 1], [2, 1], [3, 1]]);
    });
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

  describe('diagonal upwards victory', () => {
    let board;

    beforeEach(() => {
      board = makeBoard(diagonalUpwardsRedVictory);
    });

    it('should return the winning colour', () => {
      const { colour } = checkWin(board);
      expect(colour).to.equal('R');
    });

    it('should return the coordinates of the winning line', () => {
      const { coords } = checkWin(board);
      expect(coords).to.eql([[0, 1], [1, 2], [2, 3], [3, 4]]);
    });
  });

  describe('diagonal downwards victory', () => {
    let board;

    beforeEach(() => {
      board = makeBoard(diagonalDownwardsYellowVictory);
    });

    it('should return the winning colour', () => {
      const { colour } = checkWin(board);
      expect(colour).to.equal('Y');
    });

    it('should return the coordinates of the winning line', () => {
      const { coords } = checkWin(board);
      expect(coords).to.eql([[3, 1], [2, 2], [1, 3], [0, 4]]);
    });
  });
});
