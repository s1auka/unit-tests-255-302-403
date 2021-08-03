describe('302 ', () => {
	it ("should return coutn of different digits", () => {
		let num = '1357831';
		let numArr = new Set([...num]);
		expect(numArr.size).toBe(5);
	})
})