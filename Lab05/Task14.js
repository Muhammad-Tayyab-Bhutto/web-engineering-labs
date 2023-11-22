const filterLetters = (arr) => {
    const occurrences = {};

    arr.forEach((letter) => {
        const lowercaseLetter = letter.toLowerCase();
        occurrences[lowercaseLetter] = (occurrences[lowercaseLetter] || 0) + 1;
    });

    return occurrences;
};

const arr = ['a', 'B', 'c', 'A', 'd', 'e', 'A'];
console.log(filterLetters(arr));
