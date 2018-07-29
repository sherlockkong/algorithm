function adjustArray(array, left, right) {
	let x = array[left];

	while (left < right) {
		while (left < right && array[right] > x) right--;
		if (left < right) {
			array[left++] = array[right];
		}

		while (left < right && array[left] < x) left++;
		if (left < right) {
			array[right--] = array[left];
		}
	}

	array[left] = x;

	return left;
}

function sortArrayPart(array, left, right) {
	if (left < right) {
		let position = adjustArray(array, left, right);

		console.log(array, left, right)

		sortArrayPart(array, left, position - 1);
		sortArrayPart(array, position + 1, right);
	}
}

function quickSort(array) {
	sortArrayPart(array, 0, array.length - 1);
}