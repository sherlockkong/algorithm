import { lakeCounting } from '../../../src';

test('lake-counting: n = 10, m = 12, count = 3', () => {
	let ar = [
		'w........ww.'.split(''),
		'.www.....www'.split(''),
		'....ww...ww.'.split(''),
		'.........ww.'.split(''),
		'.........w..'.split(''),
		'..w......w..'.split(''),
		'.w.w.....ww.'.split(''),
		'w.w.W.....w.'.split(''),
		'.w.w......w.'.split(''),
		'..w.......w.'.split(''),
	]
	expect(lakeCounting(ar, 10, 12)).toBe(3);
});

test('lake-counting: n = 10, m = 12, count = 3', () => {
	let ar = [
		'w........ww.'.split(''),
		'.www.....www'.split(''),
		'....ww...ww.'.split(''),
		'....w....ww.'.split(''),
		'....w....w..'.split(''),
		'..ww........'.split(''),
		'.w.w......w.'.split(''),
		'w.w.W.......'.split(''),
		'.w.w......w.'.split(''),
		'..w.......w.'.split(''),
	]
	expect(lakeCounting(ar, 10, 12)).toBe(4);
});