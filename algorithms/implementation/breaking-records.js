const breakingRecords = arr => {
  let min = arr[0];
  let minC = 0;
  let max = arr[0];
  let maxC = 0;

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      minC++;
      min = arr[i];
    } else if (arr[i] > max) {
      maxC++;
      max = arr[i];
    }
  }
  return [maxC, minC];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
