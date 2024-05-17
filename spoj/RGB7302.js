function sumOfDigits(number) {
  let numberStr = number.toString();
  let sum = 0;

  for (let char of numberStr) {
    sum += parseInt(char, 10);
  }

  return sum;
}

let number = 889767;
console.log(sumOfDigits(number)); // Output: 15
