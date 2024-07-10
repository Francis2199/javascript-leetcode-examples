let numberArray = [1, 2, [2, 2, 3, 6, [4, 5]]];
function flattingArray() {
  for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i];
    // console.log(element);
    for (let j = 0; j < element.length; j++) {
      const element1 = element[j];
      //   console.log(element1);
      for (let index = 0; index < element1.length; index++) {
        const element2 = element1[index];
        // console.log(element2);
        console.log(element, element1, element2);
      }
    }
  }
}
flattingArray();

// let numberArray1 = [1, 2, [2, 2, 3, 6, [4, 5]]];
// function flattingNewArray() {
//   let newArray = numberArray1.flat(2);
//   console.log(newArray);
// }
// flattingNewArray();
