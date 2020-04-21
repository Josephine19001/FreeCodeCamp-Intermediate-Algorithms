//sum all odds fibonacci num that are less than the num
function sumFibs(num) {
    let list = fibs(num);
    
    return list
    .filter(function(value) {
        return value % 2 !== 0
    })
    .reduce(function(a,b) {
        return a+b
    })
  }

  function fibs(num) {
      let list = [1,1]
      if(num === 1){
        return list;
      }
      for (let i = 2; i <= num; i+=2) {
            let next = list[list.length-1] + list[list.length-2]
            if(next <= num){
                list.push(next)
            }
      }
      return list;
  }
  
  console.log(sumFibs(10));
  console.log(fibs(4));
  