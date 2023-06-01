//Solution 1
var checkIfPangram = function (str) {
  let alp = Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 97));
  let isCont = alp.every((letter) => str.includes(letter));
  return isCont;
};

//Solution 2

var checkIfPangram = function (str) {
  return new Set(str).size === 26;
};
