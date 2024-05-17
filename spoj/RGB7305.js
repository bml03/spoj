function countMostRepeatedDigits(number) {
    const digitCount = {};
    const digits = number.toString().split('');

    
    digits.forEach(digit => {
        if (digitCount[digit]) {
            digitCount[digit]++;
        } else {
            digitCount[digit] = 1;
        }
    });

  
    let maxFrequency = 0;
    for (const digit in digitCount) {
        if (digitCount[digit] > maxFrequency) {
            maxFrequency = digitCount[digit];
        }
    }

   
    const mostRepeatedDigits = [];
    for (const digit in digitCount) {
        if (digitCount[digit] === maxFrequency) {
            mostRepeatedDigits.push(parseInt(digit));
        }
    }

    return { count: maxFrequency, digits: mostRepeatedDigits };
}


const testNumber = 53456567643657547654675;
const result = countMostRepeatedDigits(testNumber);
console.log("Most repeated digits:", result.digits);
console.log("Frequency:", result.count);
