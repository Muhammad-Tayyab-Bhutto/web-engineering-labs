const checkSpeedLimit = (speed) => {
  const speedLimit = 70;
  if (speed <= 70) {
    return "Good Safe Driving";
  } else {
    const exceededSpeed = speed - speedLimit;
    const penaltyPoints = Math.floor(exceededSpeed / 5);

    if (penaltyPoints <= 10) {
      return "Speed Limit Crossed by Penalty Point ";
    } else {
      return "License Suspended " + penaltyPoints;
    }
  }
};

console.log(checkSpeedLimit(60)); 
console.log(checkSpeedLimit(75));  
console.log(checkSpeedLimit(130)); 