/**
 * 	Date: 2018/08/20
 * 	Author: SherlockKong
 * 	Email: sherlock.kong@grapecity.com
 * 	
 * 	Description: 
 *  给定整数a1, a2, ..., an, 判断是否可以从中找出若干数，使它们的和是k.
 */

function dfs(i, sum, ar, k) {
	if (i === ar.length) return sum === k;

	// 不加上a[i]的情况
	if (dfs(i + 1, sum, ar, k)) return true;

	// 加上a[i]的情况
	if (dfs(i + 1, sum + ar[i], ar, k)) return true;

	// 无论是否加上a[i]都不能凑成k则返回false.
	return false;
}

export default function canFindPartSum(ar, k) {
	return dfs(0, 0, ar, k);
}