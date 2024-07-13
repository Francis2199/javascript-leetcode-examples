function capitalizeFirstLetter(inputString) {
  let splittedArray = inputString.split(" ");
  for (let i = 0; i < splittedArray.length; i++) {
    splittedArray[i] =
      splittedArray[i][0].toUpperCase() +
      splittedArray[i].substring(1).toLowerCase();
  }
  let finalValue = splittedArray.join(" ");
  console.log(finalValue);
}

capitalizeFirstLetter("new delhi is capital of india");
capitalizeFirstLetter("east wesT");
