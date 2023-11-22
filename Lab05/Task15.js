const filterKey = (arr, key) => {
    return arr.filter((obj) => obj[key])
}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious:
false},{name: "Tim", isInstructor:true, isHilarious: true},{name:
"Matt", isInstructor:true}], "isHilarious") )