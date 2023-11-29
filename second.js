function calculate(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  } else if (operation == "%") {
    answer = num1 % num2;
  }
  return answer;
}
let myAnswer = calculate(90, 70, "%");
console.log(myAnswer);

function problem1(num1, num2, num3, num4) {}
