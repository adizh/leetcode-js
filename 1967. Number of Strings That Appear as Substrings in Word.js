var numOfStrings = function(patterns, target) {
    return patterns.filter((word)=> target.includes(word)).length
};