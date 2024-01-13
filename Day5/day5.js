/*Garima Roy */
let favoriteColors = ["Red", "Green", "Blue", "Pink", "Purple"];

console.log("Element at index 2", favoriteColors[2]);


favoriteColors.unshift("Green");
console.log("Array after adding element to the beginning:", favoriteColors);


favoriteColors.push("Red");
console.log("Array after adding element to the end:", favoriteColors);


let poppedElement = favoriteColors.pop();
console.log("Popped element:", poppedElement);
console.log("Array after popping element from the end:", favoriteColors);


let shiftedElement = favoriteColors.shift();
console.log("Shifted element:", shiftedElement);
console.log("Array after shifting element from the beginning:", favoriteColors);


let indexToRemove = 2;
favoriteColors.splice(indexToRemove, 1);
console.log("Array after removing element at index 2 using splice:", favoriteColors);