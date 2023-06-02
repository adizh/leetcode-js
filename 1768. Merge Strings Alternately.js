var mergeAlternately = function(word1, word2) {
    let res=[]
     let len = word1.length > word2.length ? word1.length : word2.length

    for(let i =0;i<len;i++){
        res.push(word1[i], word2[i])
    }
    return res.filter((e)=>e).join('')
};