function destroyer(arr) {
    let args = [...arguments]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if(arr[i] === args[j]){
                delete arr[i]
            }
            
        }
        
    }
    return arr.filter(Boolean);

    // return arr.filter(function (value) {
    //     return args.indexOf(value) === -1
    // })
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  