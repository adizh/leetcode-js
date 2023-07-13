var areNumbersAscending = function(s) {
    let regex=/\d+/g
    let matched= s.match(regex)
    let sorted = s.match(regex).sort((a,b)=>a-b)

    return matched.every((n,i) => sorted[i] ==n)
};
console.log(areNumbersAscending("5 box has 5 blue 1 red green and yellow marbles"))