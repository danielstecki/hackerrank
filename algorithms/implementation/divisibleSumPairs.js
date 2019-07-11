const divisibleSumPairs = (n, k, arr) => {
  return arr.reduce((accum, v, i) => {
    return (
      accum +
      arr.slice(i + 1).reduce((accum2, u) => {
        return (v + u) % k === 0 ? accum2 + 1 : accum2;
      }, 0)
    );
  }, 0);
};

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
