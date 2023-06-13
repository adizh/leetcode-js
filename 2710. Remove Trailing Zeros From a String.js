//solution 1
var removeTrailingZeros = function (word) {
  let regex = /0*0$/g;
  let matched = word.match(regex);
  if (matched) {
    matched = matched.join("").split("");
    return word.slice(0, word.length - matched.length);
  }
  return word;
};

//solution 2
var removeTrailingZeros = function (word) {
  let regex = /0+$/;
  return word.replace(regex, "");
};
