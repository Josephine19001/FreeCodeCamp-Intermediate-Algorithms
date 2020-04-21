function dropElements(arr, func) {
   while (func(arr[0]) === false) {
       arr.shift()
   }
    return arr;
  }

//This works but does not satisfy all conditions
//   function dropElements(arr, func) {
//     arr.forEach(element => {
//         if(element === arr[0] && func(element) === false){
//             arr.shift()
//         }
//     });
//      return arr;
//    }

  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  