var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index !== -1) {
    let reversed = word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("");
    return reversed + word.slice(index + 1);
  }
  return word;
};
