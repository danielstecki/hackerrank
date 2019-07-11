const pickingNumbers = arr => {
  return arr.reduce((accum1, i) => {
    return Math.max(
      accum1,
      arr.reduce((accum2, v) => {
        return i === v || i === v + 1 ? accum2 + 1 : accum2;
      }, 0)
    );
  }, 0);
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1, 1]));
