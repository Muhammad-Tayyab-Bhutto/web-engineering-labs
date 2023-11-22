const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

console.log(find([8,11,4,27], function(val){return val >= 20}))
console.log(find([8,11,4,27], function(val){return val === 5}))