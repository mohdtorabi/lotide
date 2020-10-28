const assertEqual = function(actual, expected) {
  console.log(typeof actual,"give me the expected", typeof expected);
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(sentence) {
  const answer = {};
  const noSpaces = sentence.toLowerCase().split(" ").join("");
  for (const letter of noSpaces) {
    //console.log(answer);
    if (answer[letter]) {
      answer[letter] += 1;
    } else {
      answer[letter] = 1;
    }
  }
  return answer;
};

const name = countLetters ("lighthouse in the house");
console.log(countLetters("lighthouse in the house"));
assertEqual(name["l"], 2);