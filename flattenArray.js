function flattenArray(array) {
    const returned = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object") {
        for (let j = 0; j < array[i].length; j++) {
          returned.push(array[i][j]);
        }
      } else {
        returned.push(array[i]);
      }
    }
    return returned;
}
  
const dimensionalArray = [1, 2, [3, 4, 5], 6, [7, 8], 9];
console.log(flattenArray(dimensionalArray));