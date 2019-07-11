const miniMaxSum = arr => {
  arr = arr.sort((a, b) => a - b);
  const mini = arr.slice(0, arr.length - 1).reduce((accum, n) => accum + n, 0);
  const max = arr.slice(1, arr.length).reduce((accum, n) => accum + n, 0);

  console.log(`${mini} ${max}`);
};

miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625]);
