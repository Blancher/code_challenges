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