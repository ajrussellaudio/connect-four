import { expect } from 'chai';

import { transpose, reverse } from '../manipulations';

describe('manipulations', () => {
  describe('transpose', () => {
    it('turns a row-centric 2D array into a column-centric 2D array', () => {
      const input = [[1, 2], [3, 4], [5, 6]];
      const expected = [[1, 3, 5], [2, 4, 6]];
      expect(transpose(input)).to.eql(expected);
    });
  });

  describe('reverse', () => {
    it('reverses the order of an array', () => {
      const input = [1, 2, 3];
      const expected = [3, 2, 1];
      expect(reverse(input)).to.eql(expected);
    });
  });
});
