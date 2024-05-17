function reverseNumber(number) {
  let numString = number.toString();
  let reverseString = numString.split("").reverse().join("");
  let reverseNumber = parseInt(reverseString);
  return reverseNumber;
}
let number = 123456;
console.log("Original number", number);
console.log("Reversed number:", reverseNumber(number));
