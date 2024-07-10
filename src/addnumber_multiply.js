let array3 = [1, 2, 3, 4, 5];
let newArray3 = [];
let filteredValue = array3.filter((value, index) => {
  return index % 2 === 0;
});
console.log(filteredValue);
let arrayReverseValue = filteredValue.reverse();
console.log(arrayReverseValue);
let total = 0;
for (let index = 0; index < array3.length; index++) {
  const element = array3[index];
  console.log(element);
  if (index % 2 !== 0) {
    newArray3.push(element);
  } else {
    newArray3.push(arrayReverseValue[total]);
    total += 1;
  }
}
console.log(total);
console.log(newArray3);
