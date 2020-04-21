function diffArray(arr1, arr2) {
    //filter array one
    let arr1filtered = arr1.filter(function (val) {
        return arr2.indexOf(val) === -1
    })
    //filter array two
    let arr2filtered = arr2.filter(function (val) {
        return arr1.indexOf(val) === -1
    })
    
    //return a joined array of both
    
    return arr1filtered.concat(arr2filtered);
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  
//   function diffArraySoln2(arr1,arr2) {
//       let newArr = [];

//       let arr1Filtered=arr1.forEach(function (val) {
//           if(arr2.indexOf(val) === -1){
//              return val;
//           }
//       });
//       let arr2Filtered=arr2.forEach(function (val) {
//         if(arr1.indexOf(val) === -1){
//            return val;
//         }
//     });
//       return arr2Filtered.concat(arr1Filtered);
//   }

//   console.log(diffArraySoln2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  