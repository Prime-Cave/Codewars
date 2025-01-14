// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2) {
  let count = 0;
  // Check for Null
  if (array1 == null || array2 == null) {
    return false;
  }
  let squaredArr = array1.map((num) => num * num);

  for (num of squaredArr) {
    if (!array2.includes(num)) false
  }
  for (num of array2) {
    if (!squaredArr.includes(num)) false; 
  }
  // Check for Mulitplicity
  // Count the Array
  const countSquaredArr = {};
  for (x = 0; x < squaredArr.length; x++) {
    if (!countSquaredArr.hasOwnProperty(squaredArr[x])) {
      countSquaredArr[squaredArr[x]] = 1;
    } else if (countSquaredArr.hasOwnProperty(squaredArr[x])) {
      countSquaredArr[squaredArr[x]] += 1;
    }
  }
  const countSquaredArr2 = {};
  for (x = 0; x < array2.length; x++) {
    if (!countSquaredArr2.hasOwnProperty(array2[x])) {
      countSquaredArr2[array2[x]] = 1;
    } else if (countSquaredArr2.hasOwnProperty(array2[x])) {
      countSquaredArr2[array2[x]] += 1;
    }
  }

  // Loop Over the two objects to check the multiplicity
  for (element in countSquaredArr) {
    if (countSquaredArr2[element] !== countSquaredArr[element]) {
      return false;
    }
  }
  return true;
}

console.log(
  comp(
    [7, 10, 7, 5, 5, 0, 4, 1, 4, 4, 1, 0, 6, 6, 6, 8, 4, 0, 9, 1, 1, 3],
    [
      36, 16, 16, 0, 36, 25, 49, 9, 1, 81, 1, 49, 1, 16, 25, 100, 0, 36, 1, 1,
      64, 16,
    ]
  )
);
