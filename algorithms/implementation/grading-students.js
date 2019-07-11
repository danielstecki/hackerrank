const gradingStudents = arr => {
  return arr.map(i => {
    if (i >= 38 && i % 5 >= 3) {
      return i + (5 - (i % 5));
    }
    return i;
  });
};

console.log(gradingStudents([73, 67, 38, 33]));
