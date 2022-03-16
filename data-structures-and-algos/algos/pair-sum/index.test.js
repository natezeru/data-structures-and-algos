let pairSum = require('./index');

describe("pair sum algorithm", () => {

	const arr = [0, 2, 4, 7, 8, 11, 20];

	it("returns a boolean if any two numbers in a sorted array add up to a target sum", () => {

		expect(pairSum(arr, 9)).toBe(true);
		expect(pairSum(arr, 2)).toBe(true);
		expect(pairSum(arr, 17)).toBe(false);
		expect(pairSum(arr, -17)).toBe(false);
		expect(pairSum(arr, 42)).toBe(false);
	});

	it('does not add the same number twice', () => {
		expect(pairSum(arr, 16)).toBe(false);
		expect(pairSum(arr, 0)).toBe(false);
		expect(pairSum(arr, 40)).toBe(false);
	});
})