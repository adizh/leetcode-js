var areOccurrencesEqual = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  return Object.values(obj).every((n, i, arr) => n === arr[0]);
};
