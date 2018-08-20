import canFindPartSum from '../../src/recursion/can-find-part-sum';

test('can-find-part-sum: [1, 3, 5, 7, 9] -> 6', () => {
	expect(canFindPartSum([1, 3, 5, 7, 9], 6)).toBe(true);
});

test('can-find-part-sum: [1, 3, 5, 7, 9] -> 2', () => {
	expect(canFindPartSum([1, 3, 5, 7, 9], 2)).toBe(false);
});

test('can-find-part-sum: [1, 1, 3, 19, 90] -> 91', () => {
	expect(canFindPartSum([1, 1, 3, 19, 90], 91)).toBe(true);
});

test('can-find-part-sum: [1, 1, 3, 19, 90] -> 91', () => {
	expect(canFindPartSum([1, 1, 3, 19, 90], 99)).toBe(false);
});