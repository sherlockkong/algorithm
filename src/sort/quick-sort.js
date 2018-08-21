/**
 * 	Date: 2018/07/04
 * 	Author: SherlockKong
 * 	Email: sherlock.kong@grapecity.com
 * 
 * 	Description: Quick Sort.
 */

function partition(array, left, right) {
	let x = array[left];

	while (left < right) {
		while (left < right && array[right] > x) right--;
		while (left < right && array[left] < x) left++;

		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
		}
	}

	return left;
}

function quick(array, left, right) {
	if (left < right) {
		let position = partition(array, left, right);

		quick(array, left, position - 1);
		quick(array, position + 1, right);
	}
}

export function quickSort(array) {
	quick(array, 0, array.length - 1);
	return array;
}