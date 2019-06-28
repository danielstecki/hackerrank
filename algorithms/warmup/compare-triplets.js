const compareTriplets = (arr1, arr2) => {
  let c1 = 0;
  let c2 = 0;

  arr1.forEach((i, idx) => {
    if (i > arr2[idx]) {
      c1++;
    } else if (i < arr2[idx]) {
      c2++;
    }
  });

  return [c1, c2];
};

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
