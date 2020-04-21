function steamrollArray(arr) {
    //create a new array store all the items
    let newArr = []

    flatten(arr)
    //create a function to check if item at a position is an array or not
    //if it is an array, we call the fuction again to flatten to 
    //else we push the new item(thats not an array into the newArr we declared before)
    function flatten(arr) {
    //iterate through the arr to check or the item
    arr.forEach(function (item) {
        //check if item is an array or not
        if(!Array.isArray(item)){//return false if item not an array
            newArr.push(item)//push item
        }else{
            flatten(item)//call the flatten function again to flatten the item(recursion)
        }
    });
    }
    
    return newArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([[["a"]], [["b"]]]));
