var reverseString = function (s) {
  let res = [];
  for (let i = s.length - 1; i >= 0; i--) {
    res.push(s[i]);
  }
  for (let i = 0; i < res.length; i++) {
    s[i] = res[i];
  }

  return s;
};
