function time(hour) {
  let day;
  let hours;
  day = (hour - (hour % 24)) / 24;
  hours = hour % 24;
  return console.log(day, +hours);
}
let a = time(48);
