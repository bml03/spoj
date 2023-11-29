let seconds = 200;
let sec = seconds % 60;
let minWsec = seconds - sec;
let min = minWsec / 60;
console.log(min, sec);

function secs(num1) {
  let sec = num1 % 60;
  return sec;
}
function mins(num1) {
  let sec;
  sec = num1 % 60;
  let minutWsec = num1 - sec;
  let min = minutWsec / 60;
  return min;
}
let mySecs = secs(200);
let myMin = mins(200);
console.log(myMin, mySecs);
