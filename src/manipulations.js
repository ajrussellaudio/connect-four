import { zip } from 'lodash';

export const transpose = array2d => zip(...array2d);
