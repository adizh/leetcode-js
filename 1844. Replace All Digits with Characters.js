var replaceDigits = function(str) {
    let res=str.split('')
    for(let i =1;i<res.length;i+=2){
        res[i] = String.fromCharCode(str[i-1].charCodeAt()+ +str[i])
    }
return res.join('')
    
};