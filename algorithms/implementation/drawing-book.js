const pageCount = (n, p) => {
  const c = Math.floor(p / 2);
  const t = Math.floor(n / 2);

  return Math.min(c, t - c);
};

console.log(pageCount(2, 1));
