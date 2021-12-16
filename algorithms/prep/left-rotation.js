const arr = [1,2,3]

const rotLeft = (a, d) => {
  return a.map(() => {
    if (a.length === d) {
      d = 0;
    }

    
    return a[d++];
  })
}

console.log(rotLeft(arr,2))