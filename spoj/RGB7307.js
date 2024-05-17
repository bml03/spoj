function findLowestDigit(number) {
  const numString = number.toString();
  let lowestDigit = parseInt(numString[0]);
  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString[i]);
    if (digit < lowestDigit) {
      lowestDigit = digit;
    }
  }
  return lowestDigit;
}
const testNumber = 456789;
console.log("Lowest digit:", findLowestDigit(testNumber));
