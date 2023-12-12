function number(a, b) {
  for (let i = 1; i <= a ** b; i = i * a) {
    console.log(i);
  }
}
number(3, 56);
