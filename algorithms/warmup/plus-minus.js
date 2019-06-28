const plusMinus = arr => {
  let p = 0;
  let n = 0;
  let z = 0;
  let l = arr.length;

  arr.forEach(i => {
    if (i > 0) {
      p++;
    } else if (i < 0) {
      n++;
    } else {
      z++;
    }
  });

  console.log((p / l).toFixed(l));
  console.log((n / l).toFixed(l));
  console.log((z / l).toFixed(l));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
