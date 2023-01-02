//Prime Number Finder
console.log("\n<Prime Number Finder>\n---------------------");

function primeNum(n) {
  if (n < 2) {
    return `${n} is neither a prime nor composite number.`;
  }
  const arr = [];
  for (let i = n-1; i > 1; i--) {
    if (n % i === 0) {
      arr.push(true);
    }
  }
  if (arr.length < 1) {
    return `${n} is a prime number.`;
  } else {
    return `${n} is a composite number.`;
  }
}

console.log(primeNum(1));

//Prime Number List
console.log("\n<Prime Number List>\n-------------------");

function primeFinder(n) {
  const returned = [];
  for (let i = 2; i <= n; i++) {
    const arr = [];
    for (let j = i-1; j > 1; j--) {
      if (i % j === 0) {
        arr.push(true);
      }
    }
    if (arr.length < 1) {
      returned.push(i);
    }
  }
  return returned.join(' ');
}
  
console.log(primeFinder(7));

//Array Flattener
console.log("\n<Array Flattener>\n-----------------");

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

//Missing Numbers List
console.log("\n<Missing Numbers List>\n----------------------");

function missingNos(array, n) {
  const returned = [];
  if (n > array.length) {
    n -= (n - array.length);
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
console.log(`${missingNos(testArray, 2)}\n`);