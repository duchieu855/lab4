const arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
const minNumber = arr1.filter((num) => num > 0).sort((a, b) => a - b);
console.log(minNumber);
console.log(minNumber[0]);
console.log(arr1);
