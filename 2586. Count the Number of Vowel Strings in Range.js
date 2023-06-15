var vowelStrings = function (words, left, right) {
  let regex = /^[euioa](.+)?[euioa]$/g;
  let regex2 = /^[euoia]$/;
  let matched = words
    .slice(left, right + 1)
    .map((e) => e.match(regex) || e.match(regex2))
    .filter(Boolean);
  return matched ? matched.length : 0;
};
