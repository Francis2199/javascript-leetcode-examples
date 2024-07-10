let letters = "TEST123ANM345OUARE";
let vowels = "aAeEiIoOuU";
let vowelsCount = 0;
let consonantsCount = 0;
function englishLetters() {
  for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    if (vowels.indexOf(element) !== -1) {
      vowelsCount += 1;
      // console.log(element, "vowels" );
    } else if (vowels.indexOf(element) === -1) {
      consonantsCount += 1;
      // console.log(element, "constants");
    }
  }
  console.log("Vowels:", vowelsCount, "Consonants:", consonantsCount);
}
englishLetters();


