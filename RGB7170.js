function num(a, b, c) {
  if (c < a * b) {
    C = c % b;
    let floor = (c - C) / b;

    console.log(floor, C);
  } else {
    return console.log("impossible");
  }
}

num(4, 5, 27);
