let sampleNumber = 85;
let residual = sampleNumber % 100;
let twodigit = residual - (sampleNumber % 10);
let secondDigit = twodigit / 10;
let firstDigit = sampleNumber % 10;
let answer = firstDigit * secondDigit;
console.log(answer);
