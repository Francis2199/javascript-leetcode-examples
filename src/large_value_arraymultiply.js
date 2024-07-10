let array = [5, 6, 56, 34, 78, 99];
let newArray = [];
function multiplyNumber() {
  newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element >= 50) {
      newArray.push(element * 100);
    }
  }
  console.log(newArray);
}
multiplyNumber();
