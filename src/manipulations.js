import { zip, reverse as _reverse } from 'lodash';

export const transpose = array2d => zip(...array2d);

export const reverse = array => _reverse(array);
