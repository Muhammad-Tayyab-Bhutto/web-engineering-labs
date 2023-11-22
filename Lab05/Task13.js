const extractKey = (arr, keyName) => {
  return arr.map((obj) => obj[keyName]);
};
let arr = [
  { name: "Elie", isInstructor: true },
  { name: "Tim", isInstructor: true },
  { name: "Matt", isInstructor: true },
];

console.log(extractKey(arr, "name"));
