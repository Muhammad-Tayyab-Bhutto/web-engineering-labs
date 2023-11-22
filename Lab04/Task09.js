function dateDifferenceInDays(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  const timeDifference = secondDate - firstDate;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  return Math.abs(daysDifference);
}

let date1 = "2022-03-01";
let date2 = "2022-03-29";
const difference = dateDifferenceInDays(date1, date2);
console.log('Difference in days:', difference);

