// var cellsInRange = function(s) {
//     let splitted = s.split(':')
//     let alp  = new Array(26).fill(0).map((e,index)=>String.fromCharCode(index+97)).map(e=>e.toUpperCase())
//     let firstIndex = alp.indexOf(splitted[0][0])
//     let lastIndex = alp.indexOf(splitted[1][0])
//     const regex = /\d/g;
//     let res=[]
//     let [min, max] = s.match(regex).sort((a,b)=>a-b)
//  for(let i = 0;i<4;i++){
//     res.push(`${splitted[i][0]}${min}${max}`)
//  }
//     return res
// };

// console.log(cellsInRange('K1:L2'))
