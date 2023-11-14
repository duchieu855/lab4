const arr1 = [24, 45, -10, 8, -2, 45, 23, 13, 43, -1];
const arrSortDescending = arr1.slice().sort((a, b) => b - a);
const arrSortAscending = arr1.slice().sort((a, b) => a - b);

console.log(arrSortDescending);
console.log(arrSortAscending);
console.log(arr1);
