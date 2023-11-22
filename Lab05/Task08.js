function specialMultiply (num1, num2){
  if (arguments.length === 2) {
    return num1 * num2;
  } else if (arguments.length === 1) {
    return function (x) {
      return num1 * x;
    };
  } else {
    return undefined;
  }
};

const result1 = specialMultiply(3, 4);
console.log(result1);

const result2 = specialMultiply(3)(4); 
console.log(result2);

const result3 = specialMultiply(3); 
const result4 = result3(4); 
console.log(result4);
