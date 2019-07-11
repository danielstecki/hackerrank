const kangaroo = (x1, v1, x2, v2) => {
  let result = 'NO';
  for (let i = 0; i <= 10000; i++) {
    if (v1 * i + x1 === v2 * i + x2) {
      return 'YES';
    }
  }
  return result;
};

// vt = (df - di)
// vt + di = v2t + di2

console.log(kangaroo(0, 3, 4, 2));
