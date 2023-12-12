function numbers(a, b) {
  let max;
  let min;
  let sum;
  sum = 0;

  if (a < b) {
    max = b;
    min = a;
  } else if (b < a) {
    max = a;
    min = b;
  }
  for (let i = min; i <= max; i++) {
     console.log(i);
  }
}
numbers(6, 15);

function findNumbers(a, b) {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else if (b < a) {
    for (let i = b; i <= a; i++) {
       console.log(i);
    }
  }
}
findNumbers(6, 15);
