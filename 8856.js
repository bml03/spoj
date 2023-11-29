let sampleNumber = 85;
residual = sampleNumber % 100;
twodigit = residual - (sampleNumber % 10);
secondDigit = twodigit / 10;
firstDigit = sampleNumber % 10;
answer = firstDigit * secondDigit;
console.log(answer);
