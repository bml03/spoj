function gcd(a, b) {
    // Ensure the numbers are non-negative
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    
    // Apply the Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
const num1 = 56;
const num2 = 98;

const result = gcd(num1, num2);
console.log(`The greatest common divisor of ${num1} and ${num2} is ${result}.`); // Output: The greatest common divisor of 56 and 98 is 14.
