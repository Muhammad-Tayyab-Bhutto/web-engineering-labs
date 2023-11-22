function vowelCount(str) {
  const vowels = "aeiouAEIOU";
  const result = {};
  for (let char of str) {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }

  return result;
}

console.log(vowelCount("Koi Nhi Count Kr"));
