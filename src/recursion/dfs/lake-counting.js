/**
 * 	Date: 2018/08/20
 * 	Author: SherlockKong
 * 	Email: sherlock.kong@grapecity.com
 *  Url: http://poj.org/problem?id=2386 
 * 	
 * 	Description: 
 *  Due to recent rains, water has pooled in various places in Farmer John's field, 
 *  which is represented by a rectangle of N x M (1 <= N <= 100; 1 <= M <= 100) squares. 
 *  Each square contains either water ('W') or dry land ('.'). 
 *  Farmer John would like to figure out how many ponds have formed in his field. 
 *  A pond is a connected set of squares with water in them, 
 *  where a square is considered adjacent to all eight of its neighbors. 
 *
 *  Given a diagram of Farmer John's field, determine how many ponds he has.
 * 
 */

function dfs(ar, i, j, n, m) {
	ar[i][j] = '.';

	for (let offsetI = -1; offsetI <= 1; offsetI++) {
		for (let offsetJ = -1; offsetJ <= 1; offsetJ++) {
			let r = offsetI + i, c = offsetJ + j;

			if (r >= 0 && r < n && c >= 0 && c < m && ar[r][c] === 'w') {
				dfs(ar, r, c, n, m);
			}
		}
	}
}

export function lakeCounting(ar, n, m) {
	let lakeCount = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (ar[i][j] === 'w') {
				dfs(ar, i, j, n, m);
				lakeCount++;
			}
		}
	}

	return lakeCount;
}