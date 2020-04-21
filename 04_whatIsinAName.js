function whatIsInAName(collection, source) {
  var arr = [];
  
collection.forEach(function(element){

    let match = true;

    for(let key in source){
        
        if(element[key] !== source[key]){
            match = false;
            continue;
        }
    }
    if(match){
        arr.push(element)
    }
   
});

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
