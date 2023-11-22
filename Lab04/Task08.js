const filterElementsWithDigits = (elements) => {
    return elements.filter(element => {
        if (typeof element === 'string') {
          return /\d/.test(element);
        }
        return false; 
    });
}

const inputList = ['apple', '123banana', 'cherry456', 789, 'grape'];
const result = filterElementsWithDigits(inputList);
console.log(result); 