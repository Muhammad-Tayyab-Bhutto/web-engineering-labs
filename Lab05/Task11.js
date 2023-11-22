const addKeyAndValue = (arr, key, value) => {
    return arr.map((obj) => {
        obj[key] = value;
        return obj;
    });
}

const inputArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Elie'}];
const newArray = addKeyAndValue(inputArray, "isInstructor", true);

console.log(newArray);
