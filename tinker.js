
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`:) Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  

  for (const key of Object.keys(object1)) {
    
    if (Object.keys(object1).length !==  Object.keys(object2).length) {
      return false;
    }

    if ((object1[key] instanceof Object) &&  (object2[key] instanceof Object)) {
      return eqObjects(object1[key], object2[key]);
    } else {
      return (object1[key] === object2[key]);
    }
   
  
    
  }

  
};


assertEqual(eqObjects({ 
                    a: { y: 0, z: 1 },
                    b: 2 },
                      { 
                    a: {z: 1},
                    b: 2}),
                    true); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);// => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true); // => false