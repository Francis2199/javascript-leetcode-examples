let number = 5;
let factorialNumberValue = 1;
function factorialNumber() {
  for (let index = 1; index <= number; index++) {
    // console.log(index);
    factorialNumberValue = factorialNumberValue * index;
  }
  console.log(factorialNumberValue);
}
factorialNumber();
