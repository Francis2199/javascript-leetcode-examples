let inputArray = [1, 2, 3, 4, 5];
let outputArray = [];
let filteredValue = inputArray.filter((value, index) => {
  return index % 2 === 0;
});

let total = 0;
for (let count = 0; count < filteredValue.length; count++) {
  total += filteredValue[count];
}

console.log(total);
