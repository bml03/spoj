function loan(salary, ndsh, passport, id, person, cred, dept) {
  if (
    salary > 2000000 &&
    ndsh == "yes" &&
    (passport == "yes" || id == "yes") &&
    (person == "yes" || cred == "yes") &&
    dept < 1000000
  ) {
    console.log("You are allowed to lend money");
  } else {
    console.log("Sorry, You are not allowed to lend money");
  }
}
loan(2300000, "yes", "yes", "no", "no", "yes", 500000);
