const headArray = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(headArray([5,6,7]), 5);
assertEqual(headArray(["Hello", "Lighthouse", "Labs"]), "Hello");

