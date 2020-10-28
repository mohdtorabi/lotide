
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = function(array) {
  const arrays = [];
  let elements = array.length;
  const midIndex = Math.floor(elements / 2);
  const midIndexEven = Math.floor((elements - 1) / 2);
  console.log(elements, midIndex, midIndexEven);
  if (elements % 2 !== 0 && elements > 2) {
    arrays.push(array[midIndex]);
  } else if (elements % 2 === 0) {
    arrays.push(array[midIndexEven]);
    arrays.push(array[midIndex]);
  } else {
    return arrays;
  }
  return arrays;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), [1, 2]);
assertArraysEqual(middle([1]), []);




