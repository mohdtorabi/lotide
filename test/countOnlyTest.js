const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



assertEqual((firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Jason"], 1);
assertEqual((firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Karima"], undefined);
assertEqual((firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Fang"], 2);
assertEqual((firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Agouhanna"], undefined);