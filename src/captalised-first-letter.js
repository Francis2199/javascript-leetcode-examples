let stringWord = "new delhi is capital of india";
function capitalisedFirstLetter() {
  let splittedArray = stringWord.split(" ");
  // console.log(newOne);
  for (let i = 0; i < splittedArray.length; i++) {
    splittedArray[i] =
      splittedArray[i][0].toUpperCase() + splittedArray[i].substr(1);
    // console.log(newOne[i]);
  }
  let finalValue = splittedArray.join(" ");
  console.log(finalValue);
}
capitalisedFirstLetter();
