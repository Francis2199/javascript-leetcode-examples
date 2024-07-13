function factorialNumber(input) {
  if (typeof input === "number") {
    let factorialNumberValue = 1;
    for (let index = 1; index <= input; index++) {
      factorialNumberValue = factorialNumberValue * index;
    }
    console.log(factorialNumberValue);
  } else {
    console.log("Entered input is not a number. Please enter a number!");
  }
}

factorialNumber(5);
factorialNumber("A");
