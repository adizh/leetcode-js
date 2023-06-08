/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (str) {
  let alp = Array(26)
    .fill(0)
    .map((e, i) => String.fromCharCode(i + 97));
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let obj = {};
  for (let i = 0; i < alp.length; i++) {
    obj[alp[i]] = morse[i];
  }

  let morsed = str.map((word) => {
    return word
      .split("")
      .map((el) => {
        return obj[el];
      })
      .join("");
  });

  return new Set(morsed).size;
};
