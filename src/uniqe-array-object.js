const cartArray = [1, 2, 2, 3, 3, 4, 5];
let newArray = [];
function duplicateArray() {
  for (let index = 0; index < cartArray.length; index++) {
    const element = cartArray[index];
    if (newArray.indexOf(cartArray[index]) === -1) {
      newArray.push(element);
    }
  }
  console.log(newArray);
}
duplicateArray();

const cartNewArray = [
  { id: 12, name: "burger" },
  { id: 23, name: "piza" },
  { id: 23, name: "dosa" },
  { id: 40, name: "burger" },
  { id: 38, name: "idle" },
];
let uniqeNewArray = [];
function uniqueArray() {
  for (let i = 0; i < cartNewArray.length; i++) {
    const element = cartNewArray[i];
    // console.log(element);
    let newArray = uniqeNewArray.filter((item) => {
      return item.id === element.id;
    });
    if (newArray.length === 0) {
      uniqeNewArray.push(element);
    }
  }
  console.log(uniqeNewArray);
}
uniqueArray();
