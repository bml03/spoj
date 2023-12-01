function time(hour, min, sec) {
  let secs;
  hourSec = hour * 60 * 60;
  minSec = min * 60;
  secs = hourSec + minSec + sec;
  return secs;
}
let answer = time(2, 2, 2);
console.log(answer);
