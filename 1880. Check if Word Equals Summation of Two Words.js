var isSumEqual = function (firstWord, secondWord, targetWord) {
  let alp = Array(10)
    .fill()
    .map((e, i) => String.fromCharCode(i + 97));
  let obj = {};
  for (let i = 0; i < alp.length; i++) {
    obj[alp[i]] = i;
  }
  const first = firstWord
    .split("")
    .map((e) => obj[e])
    .join("");
  const second = secondWord
    .split("")
    .map((e) => obj[e])
    .join("");

  const target = targetWord
    .split("")
    .map((e) => obj[e])
    .join("");
  return +first + +second === +target;
};

console.log(isSumEqual("acb", "cba", "cdb"));
