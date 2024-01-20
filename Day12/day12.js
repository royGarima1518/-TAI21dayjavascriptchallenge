function divideNumbers(num1, num2) {
    num1 = 5;
    num2 = 3;

    try {
        if (num1 % num2 === 0) {
            console.log("num1 is divisible by num2");
        } else {
            console.log("num1 is not divisible by num2");
        }
    } catch (error) {
        console.log("Error: Division by zero");
    }
}

divideNumbers();
