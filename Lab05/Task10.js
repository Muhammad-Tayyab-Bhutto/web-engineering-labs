const printFirstAndLast = (arr) => {
    arr.forEach((value) => {
        if (typeof value === 'string' && value.length > 0) {
            console.log(value[0] + value[value.length - 1]);
        }
    });
}

printFirstAndLast(['awesome', 'example', 'of', 'forEach']);