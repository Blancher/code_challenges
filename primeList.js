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