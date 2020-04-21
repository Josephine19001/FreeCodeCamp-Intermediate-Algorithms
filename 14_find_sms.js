function smallestCommons(arr) {
    let max = Math.max(arr[0],arr[1]);
    let min = Math.min(arr[0],arr[1]);
    let list = [];

    for (let i = max; i >= min; i--) {
        list.push(i);
        
    }
    //find the greatest common divisor
    function gcd(num1,num2) {
        if(num2 === 0){
          return num1;
        }else{
            let remainder = num1%num2
            return gcd(num2,remainder)
        }
    }
    //assign multiple to the min value

    let multiple = min;
    list.forEach(value => {
        multiple = (multiple*value)/gcd(multiple,value)
    });
    return multiple
  }
  
 

  
  
  console.log(smallestCommons([1,5]));
  