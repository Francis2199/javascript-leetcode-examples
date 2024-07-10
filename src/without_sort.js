let originalArray = [1, 3, 5, 3, 7, 8];
function arrangeNumber() {
  let newArray = [];
  for (let outer = 0; outer < originalArray.length; outer++) {
    let element = originalArray[outer];
    // console.log(element);
    for (let inner = outer + 1; inner < originalArray.length; inner++) {
      let element1 = originalArray[inner];
      // console.log(element1);
      if (element > originalArray[inner]) {
        newArray.push((element = originalArray[inner]));
      }
    }
    let spliced = newArray.splice(originalArray.indexOf(originalArray), 1);
    let shifted = newArray.unshift(element);
    console.log(spliced);
    console.log(shifted);
  }
  console.log(newArray);
}
arrangeNumber();
