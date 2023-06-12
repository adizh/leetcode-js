var cellsInRange = function (str) {
  let res = [];
  let colStart = str[0].charCodeAt(0);
  let colEnd = str[1].charCodeAt(0);
  let rowStart = str[3].charCodeAt(0);
  let rowEnd = str[4].charCodeAt(0);

  for (let i = colStart; i <= rowStart; i++) {
    for (let x = colEnd; x <= rowEnd; x++) {
      res.push(String.fromCharCode(i) + String.fromCharCode(x));
    }
  }
  return res;
};
