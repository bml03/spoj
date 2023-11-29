function findMonth(num) {
  if (num <= 31) return "january";
  else if (num <= 31 + 28) return "february";
  else if (num <= 31 + 28 + 31) return "march";
  else if (num <= 31 + 28 + 31 + 30) return "april";
  else if (num <= 31 + 28 + 31 + 30 + 31) return "may";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30) return "june";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31) return "july";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31) return "august";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30)
    return "september";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31)
    return "october";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)
    return "november";
  else if (num <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31)
    return "december";
}
console.log(findMonth(156));
function examResult(result1, result2, result3) {
  let finalResult = (result1 + result2 + result3) / 3;
  return finalResult;
}
let myResult = examResult(75, 65, 89);
console.log(myResult);
let season = 2;
if (season <= 12) {
  console.log("winter");
} else if (season <= 4) {
  console.log("spring");
} else if (season <= 7) {
  console.log("summer");
} else if (season <= 10) {
  console.log("fall");
}
