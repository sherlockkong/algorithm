import { generateCardsOriginOrder } from '../../src';

test('generate-cards-origin-order: 5', () => {
	expect(generateCardsOriginOrder(5)).toEqual([1, 5, 2, 4, 3]);
});

test('generate-cards-origin-order: 10', () => {
	expect(generateCardsOriginOrder(10)).toEqual([1, 6, 2, 10, 3, 7, 4, 9, 5, 8]);
});