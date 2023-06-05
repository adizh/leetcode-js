var sortSentence = function (str) {
  let obj = {};
  let len = str.split(" ");
  let regex = /\d/g;
  let matched = str.match(regex);
  for (let i = 0; i < len.length; i++) {
    obj[matched[i]] = len[i];
  }
  return Object.keys(obj)
    .map((e) => obj[e])
    .map((word) => {
      return word.slice(0, word.length - 1);
    })
    .join(" ");
};
