const arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
const countOdd = arr1.filter((num) => num < 10 && num % 2 !== 0).length;
console.log(countOdd);
