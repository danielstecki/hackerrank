const birthday = (arr, d, m) => {
  return arr.reduce((accum, v, i) => {
    return arr.slice(i, i + m).reduce((accum2, u) => {
      return accum2 + u;
    }, 0) === d
      ? ++accum
      : accum;
  }, 0);
};

console.log(birthday([1, 1, 1, 1, 1], 3, 2));
