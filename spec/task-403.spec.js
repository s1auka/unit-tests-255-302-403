describe('403 ', () => {
		const matrix = [
			[0,0,0,0,0,0,16,0,0,0,0,0,0,0,0],
			[0,2,3,0,0,0,16,0,23,24,0,0,0,0,0],
			[0,0,0,0,0,0,16,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,24,0,0,0,0,0],
			[0,2,3,0,0,0,10,0,12,24,0,0,0,0,0],
			[0,9,0,0,0,0,0,0,37,56,0,0,0,0,0],
			[0,2,0,0,0,0,16,0,12,45,0,0,0,0,0],
			[0,2,3,0,0,0,0,0,0,24,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,66,72,0,0,0,0,0],
			[0,2,3,0,0,0,0,0,0,88,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,24,0,0,0,0,0],
			[0,0,3,0,0,0,0,0,44,24,0,0,0,0,0],
			[0,0,3,0,0,0,0,0,0,24,0,0,0,0,0],
			[0,2,0,0,0,0,0,0,12,24,0,0,0,0,0],
			[0,2,3,0,0,0,16,0,0,24,0,0,0,0,0],
		];
		const MATRIX_SIZE = 15;


	it ("should return index of first elem !=0", () => {
		arr = matrix.flat();
		let index = arr.findIndex((el) => el!==0);
		index = [Math.floor(index/MATRIX_SIZE), index%MATRIX_SIZE];
		console.log(index);

		expect(matrix[index[0]][index[1]]).toBe(16);
	})

	it ("should return indexes of all elems !=0", () => {
		let arrOfIndex = [];
		let elem;
		
		arr = matrix.flat();

		arr.forEach((el,inx) => {
			if (el!==0) {
				elem = {
					indices: {
						i: Math.floor(inx/MATRIX_SIZE),
						j: inx%MATRIX_SIZE
					},
					value: el
				}
				arrOfIndex.push(elem);
			}
		})

		console.log(arrOfIndex);

		expect(arrOfIndex.length).toBe(41);
	})
})