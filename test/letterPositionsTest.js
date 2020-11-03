const assertArraysEqual = require('../assertArraysEqual');

const letterPositions = require('../letterPositions');




assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);