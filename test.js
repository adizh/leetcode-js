var countPrefixes = function (words, s) {
  const regex = new RegExp(`^${s}`);
  return words.filter((word) => word.match(regex));
};
console.log(
  countPrefixes(
    [
      "e",
      "s",
      "mi",
      "e",
      "ia",
      "ibwu",
      "e",
      "e",
      "k",
      "ci",
      "rip",
      "suw",
      "a",
      "l",
    ],
    "e"
  )
);
