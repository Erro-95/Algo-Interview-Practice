function productSum(arr, count = 1) {
  let output = 0;

  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i])
      ? (output += productSum(arr[i], count + 1))
      : (output += arr[i]);
  }

  return output * count;
}

function productSum2(array, multi = 2) {
  return array.reduce((result, next) => {
    return (result += Array.isArray(next)
      ? multi * productSum(next, multi + 1)
      : next);
  }, 0);
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
console.log(productSum([[1, 2], 3, [4, 5]]));
console.log(productSum([[[[[5]]]]]));
console.log(productSum([1, [2, [3]]]));
