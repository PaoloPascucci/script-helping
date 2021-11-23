// What is the largest number in the list?
//   Example:
// largest([7, 6, 5, 4, 3, 2, 1])


// ==========
// Functions
// ==========
function largest(numbers) {

  function search(larg, arr) {
    if (arr.length > 0) {
      if (arr[0] > larg) {
        maxN = arr[0]
        arr.splice(0, 1)
        return search(maxN, arr);
      } else {
        arr.splice(0, 1)
        return search(larg, arr);;
      }
    } else {
      return larg;
    }
  }

  return search(0, numbers);
}


// ==========
// Test
// ==========

console.log(largest([2, 6, 5, 9, 30, 2, 1]));
console.log(largest([50, 6, 1, 2, 4, 2, 8]));
console.log(largest([10, 8, 9, 10, 20, 8, 6]));
console.log(largest([5, 16, 55, 4, 10, 21, 11]));

