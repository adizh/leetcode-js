var repeatedCharacter = function (s) {
  return s.split("").filter((e, i, arr) => arr.indexOf(e) !== i)[0];
};
