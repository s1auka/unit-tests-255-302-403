describe('255 ', () => {
	it ("should return first position of 'aa' in string or 0", () => {
		let stringWithtAa = 'suudhnci;aspaoAAjspd[ls';
		let pos = stringWithtAa.toLowerCase().indexOf('aa');
		console.log('pos is ' + pos);
		expect(pos).toBe(14);
	})

	it ("should return false if string doesnt contain 'aa'", () => {
		let stringWithoutAa = 'suudhnci;aspaojspd[ls';
		let pos = stringWithoutAa.toLowerCase().includes('aa');

		expect(pos).toBeFalsy();
	})

	it ("should return true if string contain 'aa'", () => {
		let stringWithAa = 'suudhnAAci;aspaojspd[ls';
		let pos = stringWithAa.toLowerCase().includes('aa');

		expect(pos).toBeTruthy();
	})
})