function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  const resultArray = Array.from(str).filter((char) => !vowels.includes(char));

  return resultArray;
}

const inputString = "Vowel Remove Kr";
const resultArray = removeVowels(inputString);
console.log(resultArray.join(""));
