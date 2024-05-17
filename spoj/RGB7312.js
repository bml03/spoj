function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function checkDivisibility(num, divisor) {
  const divisorFactorial = factorial(divisor);
  if (num % divisorFactorial === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

// Example usage:
const number = 24;
const divisor = 4;


checkDivisibility(number, divisor);
