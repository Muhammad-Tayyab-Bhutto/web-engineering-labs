const countdown = (number) => {
  const intervalId = setInterval(() => {
    console.log(number);
    number--;

    if (number < 0) {
      console.log("DONE!");
      clearInterval(intervalId);
    }
  }, 1000);
};

console.log(countdown(100))
