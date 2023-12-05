function leapYear(year) {
  if (year % 4 == 0 || year % 400 == 0) {
    console.log("Leap year");
  } else if (year % 100 == 0) {
    console.log("Not leap year");
  } else {
    console.log("Not leap year");
  }
}
leapYear(1500);
