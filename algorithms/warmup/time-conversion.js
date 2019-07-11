const timeConversion = str => {
  const suffix = str.slice(str.length - 2, str.length);
  const time = str.slice(0, str.length - 2).slice(2, str.length);
  let hrs = Number(str.slice(0, 2));

  if (suffix === 'AM') {
    hrs = hrs === 12 ? 0 : hrs;
  } else if (hrs !== 12) {
    hrs = hrs + 12;
  }

  return (hrs < 10 ? `0${hrs}` : hrs) + time;
};

console.log(timeConversion('02:40:03PM'));
