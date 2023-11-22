const numbers = [3, 1, 2, 1, 4, 1, 5];
const min_value = Math.min(...numbers);
const count_min = numbers.filter((num) => num === min_value).length;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === min_value) {
    numbers[i] = -1;
  }
}
console.log("Modified array:", numbers);
console.log("Number of occurrences of the minimum value:", count_min);
