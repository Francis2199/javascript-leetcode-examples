let inputArray = [5, 6, 56, 34, 78, 99];
function multiplyNumber() {
  let outputArray = inputArray
    .filter((value) => {
      return value > 50;
    })
    .map((value) => value * 100);
  console.log(outputArray);
}
multiplyNumber();
