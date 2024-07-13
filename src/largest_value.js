function thirdLargestValue() {
  const inputArray = [10, 3, 30, 60, 300, 54, 92, 67, 87, 97];
  let sortedValue = inputArray.sort((a, b) => {
    return b - a;
  });
  let maximumThirdValue = `Third  largest value: ${sortedValue[2]}`;
  console.log(sortedValue, maximumThirdValue);
}
thirdLargestValue();
