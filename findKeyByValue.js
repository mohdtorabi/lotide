const assertEqual = function(actual, expected) {
  //console.log(typeof actual,"give me the expected", typeof expected);
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};




const findKeyByValue = function(objectKey, value) {
  
  //console.log(a, keyValue);
  for (const key of Object.keys(objectKey)) {
    console.log(key, objectKey[key]);
    if (objectKey[key] === value) {
      return key;
    }
  }
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);