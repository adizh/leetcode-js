var countWords = function (words1, words2) {
  let first = new Map();
  let second = new Map();
  let count = 0;

  words1.forEach((word) => first.set(word, first.get(word) + 1 || 1));
  words2.forEach((word) => second.set(word, second.get(word) + 1 || 1));

  words1.forEach((word) => {
    if (first.get(word) === 1 && second.get(word) === 1) count++;
  });
  return count;
};
