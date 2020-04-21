function addTogether() {
    let args = [...arguments];

    function check(num) {
        if(typeof num  !== "number"){
            return undefined
        }else return num;
    }

    if(args.length>1){
        let a = check(args[0]);
        let b = check(args[1])

        if(a===undefined || b === undefined){
            return undefined;
        }else{
            return a+b
        }
    }else{
        let c= check(args[0])
        if(c){
        return function(arg2) {
            if(c === undefined || check(arg2) === undefined){
                return undefined;
            }else{
                return arg2 + c
            }
        }
    }
    }

  }
  console.log(addTogether(2,3));
  console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));



  