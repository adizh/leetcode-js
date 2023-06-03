var sortPeople = function(names, heights) {
    let obj={}
for(let i =0;i<names.length;i++){
    obj[heights[i]] = names[i]
  
}
let sorted= Object.keys(obj).sort((a,v)=>v-a)

return sorted.map((h,i)=> obj[h])
};