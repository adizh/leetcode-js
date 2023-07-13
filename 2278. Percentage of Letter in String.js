var percentageLetter = function (s, letter) {
  let fil = s.split("").filter((e) => e == letter);
  let len;
  if (fil) {
    len = fil.length;
  }
  const res = (len / s.length) * 100;
  return Math.floor(res);
};
console.log(percentageLetter("sgawtb", "s"));
