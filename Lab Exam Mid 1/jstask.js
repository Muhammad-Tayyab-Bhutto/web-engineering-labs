test 
let str = "this@gmail.com";
let flag1 = false;
let flag2 = false;
let count = 0;
if (str[0] === "@" || str[0] === '.') {
  flag1 = false;
} else {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") {
      flag1 = true;
      break;
    }
    count++;
  }
}

for (let i = count; i < str.length; i++) {
  if (str[i] === ".") {
    flag2 = true;
  }
}

if (flag1 && flag2) {
  console.log("valid");
} else {
  console.log("Not Valid");
}
