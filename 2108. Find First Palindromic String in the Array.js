//Solution 1
var firstPalindrome = function(words) {
        function isPalindrom(str){
              let reversed =str.split('').slice().reverse().join('')
            return reversed === str
        }
    let res =  words.find((e)=>isPalindrom(e)) 
    return res ? res : ''
}

//Solution 2
var firstPalindrome = function(words) {
    for(let i =0;i<words.length;i++){
        if(words[i] === words[i].split('').reverse().join('')) {
            return words[i]
        }
    }
    return ''
    };




    