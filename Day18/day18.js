const numbersArray = [1, 2, 3, 4, 5];

const mappedArray = numbersArray.map(num => num * 2);

const filteredArray = numbersArray.filter(num => num > 2);

const sum = numbersArray.reduce((acc, num) => acc + num, 0);

console.log("Original Array:", numbersArray);
console.log("Mapped Array (doubled):", mappedArray);
console.log("Filtered Array (greater than 2):", filteredArray);
console.log("Sum of the Array:", sum);
