function sumEvenDigits(number) {
  let sum = 0;
  for (let char of number.toString()) {
    let digit = parseInt(char, 10);
    if (digit % 2 === 0) {
      sum += digit;
    }
  }
  return sum;
}
let number = 123456;
console.log(sumEvenDigits(number));
