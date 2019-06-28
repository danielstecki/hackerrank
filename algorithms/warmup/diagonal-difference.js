const diagonalDifference = arr => {
  let pd = 0;
  let sd = 0;

  arr.forEach((i, idx) => {
    pd = pd + i[idx];
    sd = sd + i[arr.length - 1 - idx];
  });

  return Math.abs(pd - sd);
};

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
