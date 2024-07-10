function thirdLargestValue() {
  Array = [10, 3, 30, 60, 300];
  let arrVal = Array.sort((a, b) => {
    return b - a;
  });
  // console.log(arrVal);
  let maximumThirdValue = `Largest third value: ${arrVal[arrVal.length - 3]}`;
  console.log(maximumThirdValue);
}
thirdLargestValue();
