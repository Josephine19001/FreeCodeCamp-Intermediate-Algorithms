function truthCheck(collection, pre) {
return collection.every(function (element) {
    let arrFalsy = []
    for (let i = 0; i < collection.length; i++) {
        if(!collection[i][pre]){
            arrFalsy.push(collection[i])
        }
    }
    if(arrFalsy.length===0){
        return true
    }else{
        return false
    }
    
    
})
}
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
  

  //Solution 2
//   function truthCheck(collection, pre) {
//     return collection.every(function (element) {
//         return element[pre]
//     })
// }