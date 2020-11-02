

const middle = function(array) {
  const arrays = [];
  let elements = array.length;
  const midIndex = Math.floor(elements / 2);
  const midIndexEven = Math.floor((elements - 1) / 2);

  if (elements % 2 !== 0 && elements > 2) {
    arrays.push(array[midIndex]);
  } else if (elements % 2 === 0) {
    arrays.push(array[midIndexEven]);
    arrays.push(array[midIndex]);
  }
  //console.log(arrays);
  return arrays;
};

//middle([1, 2]);



module.exports = middle;
