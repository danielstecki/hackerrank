const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const ax = apples.map(x => a + x);
  const ox = oranges.map(x => b + x);

  const count = v =>
    v.reduce((accum, i) => {
      if (i >= s && i <= t) {
        return accum + 1;
      }
      return accum;
    }, 0);

  console.log(count(ax));
  console.log(count(ox));
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
