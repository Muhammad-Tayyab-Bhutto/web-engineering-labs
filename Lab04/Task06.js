const grade = (marks) => {
    let totalMarks = 0;
    for (let subjectMarks of marks) {
        totalMarks += subjectMarks
    }
    const percentage = totalMarks / 500 * 100;
    if (percentage < 60) {
        console.log("F");
    } else if (percentage >= 60 && percentage <= 65) {
        console.log("C-");
    } else if (percentage >= 65 && percentage <= 70) {
        console.log("C")
    } else if (percentage >= 70 && percentage <= 75) {
        console.log("C+");
    } else if (percentage >= 75 && percentage <= 80) {
        console.log("B-")
    } else if (percentage >= 80 && percentage <= 85) {
        console.log("B+");
    } else if (percentage >= 85 && percentage <= 90) {
        console.log("B-")
    } else if (percentage >= 90 && percentage <= 95) {
        console.log("A-");
    } else if (percentage >= 95 && percentage <= 100) {
        console.log("A")
    } 
}
let marks = [90, 94, 99, 100, 97]
grade(marks)