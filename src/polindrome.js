let polindrome = "Reviver";
let value = "";
function polinValue() {
  let newPolindrome = polindrome.toUpperCase();
  // console.log(newPolindrome);
  for (let i = newPolindrome.length - 1; i >= 0; i--) {
    value += newPolindrome[i];
  }
  console.log(value);
  if (newPolindrome === value) {
    console.log("It's an polindrome");
  } else {
    console.log("It not a polindrome");
  }
}
polinValue();
