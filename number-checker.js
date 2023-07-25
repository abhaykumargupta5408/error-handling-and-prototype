function numberChecker(arr) {
    return function(number) {
      return arr.includes(number);
    };
  }
  
  // Example usage:
  const numbers = [1, 3, 5, 7, 9];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(5)); // true
  console.log(checkNumber(8)); // false
  