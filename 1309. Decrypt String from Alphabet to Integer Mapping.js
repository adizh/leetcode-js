var freqAlphabets = function (str) {
  let res = "";
  let split = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i + 2] == "#") {
      split.push(str[i] + str[i + 1]);
      i++;
    } else if (str[i] !== "#") {
      split.push(str[i]);
    }
  }
  for (let i = 0; i < split.length; i++) {
    res += String.fromCharCode(96 + +split[i]);
  }

  return res;
};

console.log(
  freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")
);
