const staircase = num => {
  const arr = Array(num).fill();
  arr.forEach((_, idx) => {
    console.log(' '.repeat(num - idx - 1) + '#'.repeat(idx + 1));
  });
};

staircase(6);
