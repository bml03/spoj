let sampleNumber = 1686,
  residual = sampleNumber % 100;
twodigit = residual - (sampleNumber % 10);
secondDigit = twodigit / 10;
console.log("The last digit of ", sampleNumber, " is ", secondDigit);
