var prefixCount = function (words, pref) {
  let matched = words.map((e) => e.match("^" + pref)).filter(Boolean);

  return matched ? matched.length : 0;
};
