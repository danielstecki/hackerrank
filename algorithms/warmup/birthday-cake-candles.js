const birthdayCakeCandles = arr => {
  const max = Math.max(...arr);
  return arr.filter(i => i === max).length;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));
