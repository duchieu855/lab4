const arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
const evenNum = arr1
	.filter((num) => num > 0 && num % 2 === 0)
	.reduce((acc, num) => acc + num);
// const sumEven = evenNum.reduce((acc, num) => acc + num);
console.log(evenNum);
// console.log(sumEven);
