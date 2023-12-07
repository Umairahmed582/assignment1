// Scenario 1: Sum numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Scenario 2: Check Even or Odd
function checkEvenOrOdd(number: number): string {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

// Scenario 3: Calculate Area
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Scenario 4: String Reversal
function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}

// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Example usage:
console.log(add(3, 7)); // Output: 10
console.log(checkEvenOrOdd(6)); // Output: Even
console.log(calculateArea(4, 5)); // Output: 20
console.log(reverseString('hello')); // Output: olleh
console.log(convertCelsiusToFahrenheit(25)); // Output: 77
