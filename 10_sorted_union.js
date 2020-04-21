function uniteUnique() {
    let args = [...arguments];
    let newArr = [];
  
    for(let i = 0; i < args.length; i++){
      let singleArr = args[i];
  
      singleArr.forEach(function(index){
        if(newArr.indexOf(index) == -1){
          newArr.push(index)
        }
      })
    }
    return newArr;
  }
  
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  