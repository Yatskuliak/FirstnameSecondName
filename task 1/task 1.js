const numbers = (entryNumber) => {
    if (entryNumber < 0) return 0;
    
    let sum = 0

    for (let i = 0; i < entryNumber; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum
}

console.log (numbers(10))