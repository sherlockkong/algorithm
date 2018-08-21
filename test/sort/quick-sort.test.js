import { quickSort } from '../../src';

test('quick-sort: [2, 3, 4, 1, 6, 7, 9, 8, 5]', () => {
	expect(quickSort([2, 3, 4, 1, 6, 7, 9, 8, 5])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});