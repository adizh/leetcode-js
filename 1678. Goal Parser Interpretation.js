var interpret = function(command) {
    let obj={
        "G":'G',
        "()":'o',
        '(al)':'al'
    }
  let regex = /G|(\(\))|(\(al\))/g
  return command.match(regex).map((e)=>obj[e]).join('')
};