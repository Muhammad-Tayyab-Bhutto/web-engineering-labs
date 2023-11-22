const printStr = (obj) => {
  for (let key in obj) {
      if (typeof obj[key] === 'string') {
        console.log(key + ": " + obj[key]);
      }
  }
}
let obj = {id: 1, name: "Muhammad Tayyab"}
console.log(printStr(obj))