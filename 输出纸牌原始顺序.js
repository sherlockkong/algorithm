/**
 * 	Date: 2018/07/04
 * 	
 * 	一副从1到n的牌，每次从牌堆顶取一张放桌子上，再取一张放牌堆底，直到牌堆没牌，
 * 	最后桌子上的牌是从1到n有序，设计程序，输入n，输出牌堆的顺序数组
 * 
 */

export function genOrder(n) {
	if (n <= 0) return [];

	let i = 0;
	let or = [];
	while (++i <= n) or.push(i);

	i = 0;
	let dk = [];

	while (or.length > 0) {
		dk.push(or.shift());

		if (or.length > 0) or.push(or.shift());
	}

	let rst = [];
	dk.forEach((d, idx) => { rst[d] = idx + 1 });
	rst.shift();

	return rst;
}