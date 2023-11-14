const arr = [
	{ name: "BMW", color: "Red", capacity: 4 },
	{ name: "Audi", color: "Green", capacity: 8 },
	{ name: "BMW", color: "Blue", capacity: 6 },
	{ name: "Merc", color: "Green", capacity: 4 },
];
const listBMWCars = arr.filter((arr) => arr.name === "BMW");
console.log(listBMWCars);

const sumCarCapacities = arr.reduce((acc, arr) => acc + arr.capacity, 0);
console.log(sumCarCapacities);

const greenCars = arr.reduce(
	(acc, arr) => (arr.color === "Green" ? acc + 1 : acc),
	0
);
console.log(greenCars);

const maxCapacity = arr.reduce((acc, arr) =>
	acc > arr.capacity ? acc : arr.capacity
);
console.log(maxCapacity);

const sortAscending = arr
	.slice()
	.sort((a, b) => (a.capacity > b.capacity ? 1 : -1));
console.log(sortAscending);

const sortDescending = arr
	.slice()
	.sort((a, b) => (a.capacity < b.capacity ? 1 : -1));
console.log(sortDescending);
