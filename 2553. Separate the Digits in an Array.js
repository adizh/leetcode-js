//Solution 1

var separateDigits = function(nums) {
    return  nums.join('').split('').map(e=>+e)
};

//Solution 2

var separateDigits = function(nums) {
    return  Array.from(nums.join(''), Number)
};