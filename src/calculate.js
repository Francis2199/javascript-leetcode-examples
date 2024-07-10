let number = 5;
function calDisplay() {
  for (let index = 0; index < number; index++) {
    let newValue = `${number} * ${index} = ${number * index}`;
    console.log(newValue);
  }
}
calDisplay();
