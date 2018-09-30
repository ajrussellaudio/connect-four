import { expect } from 'chai';

import { transpose } from '../manipulations';

describe('transpose', () => {
  it('turns a row-centric 2D array into a column-centric 2D array', () => {
    const input = [[1, 2], [3, 4], [5, 6]];
    const expected = [[1, 3, 5], [2, 4, 6]];
    expect(transpose(input)).to.eql(expected);
  });
});
