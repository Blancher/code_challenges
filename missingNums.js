function missingNos(array, n) {
    const returned = [];
    if (n > array.length) {
      n -= n - array.length;
    }
    for (let i = 0; i < n; i++) {
      const random = Math.floor(Math.random() * array.length);
      if (returned.includes(array[random])) {
        n++;
      } else {
        returned.push(array[random]);
      }
    }
    return returned.sort((x, y) => y < x);
}
    
const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));