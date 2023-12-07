function input(a, b) {
  let sum = 0;
  let stack = [
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
    { number: a },
  ];
  for (i = 0; i < b; i++) {
    sum = sum + stack[0].number;
  }
  return console.log(sum);
}
let catcher = input(100, 6);
console.log(catcher);
