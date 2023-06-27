// Code your solution here
function soup(phrase, bank) {
  const charCount = {};

  // Count the characters in the phrase
  for (let char of phrase) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Check if there are enough characters in the bank
  for (let char of bank) {
    if (charCount[char]) {
      charCount[char]--;
    }
  }
  // Check if all characters in the phrase have been accounted for
  for (let count of Object.values(charCount)) {
    if (count > 0) {
      return false;
    }
  }
  return true;
}

const phrase = 'helloworld';
const bank = 'dlrowhlloeh';
console.log(soup(phrase, bank));

const phrase2 = 'abcdefg';
const bank2 = 'abcd';
console.log(soup(phrase2, bank2));
