let palindrome = "Reviver";
let reversedValue = "";
function isPalindrome() {
  let updatedInput = palindrome.toUpperCase();
  for (let i = updatedInput.length - 1; i >= 0; i--) {
    reversedValue += updatedInput[i];
  }
  if (updatedInput === reversedValue) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}
isPalindrome();
