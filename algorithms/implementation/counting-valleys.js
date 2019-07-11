const countingValleys = (n, s) => {
  let c = 0;
  let y = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') {
      if (++y === 0) {
        c++;
      }
    } else {
      --y;
    }
  }
  return c;
};

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
