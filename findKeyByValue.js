const findKeyByValue = function(objectKey, value) {
  
  //console.log(a, keyValue);
  for (const key of Object.keys(objectKey)) {
    console.log(key, objectKey[key]);
    if (objectKey[key] === value) {
      return key;
    }
  }
};





module.exports = findKeyByValue;