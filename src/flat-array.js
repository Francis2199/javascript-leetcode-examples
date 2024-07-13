let numberArray = [1, 2, [2, 2, 3, 6, [4, 5]]];
const outputArray = [];

function flatArray() {
  flattenInnerArray(numberArray);
  console.log(outputArray);
}

flatArray();

function flattenInnerArray(innerArray) {
  for (let count = 0; count < innerArray.length; count++) {
    if (typeof innerArray[count] === "number") {
      outputArray.push(innerArray[count]);
    } else {
      flattenInnerArray(innerArray[count]);
    }
  }
}
