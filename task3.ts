// Function to add two numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Example usage
const sumResult: number = add(3, 7);
console.log("Sum:", sumResult); //
// Function to check if a number is even or odd
function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Example usage
const numberToCheck: number = 15;
const result: string = checkEvenOrOdd(numberToCheck);
console.log(`${numberToCheck} is ${result}`); // Output: 15 is Odd
// Function to calculate the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Example usage
const rectangleWidth: number = 5;
const rectangleHeight: number = 8;
const area: number = calculateArea(rectangleWidth, rectangleHeight);
console.log("Area of the rectangle:", area); // Output: 40
// Function to reverse a string
function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}

// Example usage
const originalString: string = "Hello, World!";
const reversedString: string = reverseString(originalString);
console.log("Reversed string:", reversedString); // Output: "!dlroW ,olleH"
// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Example usage
const celsiusTemperature: number = 25;
const fahrenheitTemperature: number = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`); // Output: 25°C is equal to 77°F

