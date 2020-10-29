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

const eqObjects = function(object1, object2) {
  //console.log(Object.keys(object1), Object.keys(object2));
  //console.log(Object.keys(object1) !== Object.keys(object2));
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1) && Array.isArray(object2)) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        //console.log(object1[key], object2[key]);
          
        return false;
      }
    }
  }
  return true;
};
  

const assertObjectsEqual = function(actual, expected) {
  //console.log(actual, expected);
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false



assertObjectsEqual(ab, ba); // => true


assertObjectsEqual(ab, abc); // => false*/