
const tail = function(array) {
  let tailArray = [];
  
  tailArray = array.slice(-1)[0];
  
  return tailArray;
};



module.exports = tail;

