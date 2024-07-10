let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function addNumber() {
  for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i];
    // console.log(element);
    if (element % 2 === 0) {
      console.log(element, ":", "EVEN");
    } else if (element % 2 !== 0) {
      console.log(element, ":", "ODD");
    }
  }
}
addNumber();

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let valueNew = [];
function addNumberNew() {
  for (let i = 0; i < array.length; i++) {
    let element1 = array[i];
    // console.log(element1);
    if (element1 % 2 === 0) {
      valueNew.push(element1);
    }
  }
  console.log(valueNew);
}
addNumberNew();
