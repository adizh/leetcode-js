var halvesAreAlike = function (s) {
  // let a = s.split('').splice(0, s.length / 2).join('')
  // let b = s.split('').splice(s.length/2).join('')
  let a = s.slice(0, s.length / 2);
  let b = s.slice(s.length / 2);
  let regex = /[euioa]/gi;
  let first = a.match(regex);
  let second = b.match(regex);
  if (first && second) {
    return first.length === second.length;
  } else if (!first && !second) {
    return true;
  } else if (!first || !second) return false;
};
