function factorialChecker(number) {
  if (number < 0) {
    console.log(" Factorial for negative number does not exist.");
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  } else {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
      factorial *= i;
    }
    console.log(`The factorial of ${number} is ${factorial}.`);
  }
}
