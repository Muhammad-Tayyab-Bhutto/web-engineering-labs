const numberFact = (number, callBackFunc) => {
  if (typeof number === "number" && typeof callBackFunc === "function") {
    return callBackFunc(number);
  } else {
    throw new Error(
      "Both arguments must be of the correct types (number and function)."
    );
  }
};

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}
const isOdd = (number) => (number % 2 == 1 ? true: false)
const isEven = (number) => (number%2 == 0 ? true : false)

console.log(numberFact(9, isPrime))