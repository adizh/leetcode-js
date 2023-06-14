var countSeniors = function (details) {
  let ages = details.map((el) => el.slice(-4, -2));
  let filtered = ages.filter((e) => +e > 60);
  return filtered ? filtered.length : 0;
};
