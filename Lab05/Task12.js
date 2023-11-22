const valTimesIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= i;
    }
    return arr;
}

console.log(valTimesIndex([1,2,3]))