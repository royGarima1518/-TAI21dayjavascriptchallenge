/* String concatenation */

var firstName = "Garima";
var lastName = "Roy";
var fullName = firstName + " " + lastName;
document.getElementById("output").innerText += "String Concatenation: " + fullName + "\n";


/* Arithmetic operations for numbers */

var num1 = 10;
var num2 = 5;

var sum = num1 + num2;
document.getElementById("output").innerText += "Addition: " + sum + "\n";

var difference = num1 - num2;
document.getElementById("output").innerText += "Subtraction: " + difference + "\n";

var product = num1 * num2;
document.getElementById("output").innerText += "Multiplication: " + product + "\n";

var quotient = num1 / num2;
document.getElementById("output").innerText += "Division: " + quotient + "\n";


/* Logical operations for booleans */

var isTrue = true;
var isFalse = false;

var andResult = isTrue && isFalse;
document.getElementById("output").innerText += "Logical AND: " + andResult + "\n";

var orResult = isTrue || isFalse;
document.getElementById("output").innerText += "Logical OR: " + orResult + "\n";

var notResult = !isTrue;
document.getElementById("output").innerText += "Logical NOT: " + notResult + "\n";