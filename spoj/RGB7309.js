function isPalindrome(number) {
    // Convert number to string
    let numString = number.toString();
    
    // Reverse the string
    let reversedString = numString.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return numString === reversedString;
}

// Example usage
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
