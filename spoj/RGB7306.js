function findHighestDigit(number) {
   
    
    const numString = number.toString();
    
  
    let highestDigit = 0;

   
    for (let i = 0; i < numString.length; i++) {
        const digit = parseInt(numString[i]);
        
     
        if (digit > highestDigit) {
            highestDigit = digit;
        }
    }

    return highestDigit;
}


const testNumber = 975314;
console.log("Highest digit:", findHighestDigit(testNumber)); // Output: 9
