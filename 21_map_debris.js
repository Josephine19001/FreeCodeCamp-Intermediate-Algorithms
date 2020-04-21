function orbitalPeriod(arr) {
    let avgAlt;
    let period;
    arr.forEach(function(obj){
        avgAlt = obj["avgAlt"];
        period = findPeriod(avgAlt)
        obj.avgAlt = period
        obj.orbitalPeriod = obj["avgAlt"]
        delete obj.avgAlt

    });
    
    return arr
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
  
  //formula is T = (2*PI) Square root(r3/GM) where r is average height plus earth radius
  function findPeriod(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let totalRadius = avgAlt + earthRadius;
    totalRadius = Math.pow(totalRadius,3)
    let inSqrt = Math.sqrt(totalRadius/GM)
    let pi = 2*Math.PI
    let period = pi * inSqrt
    return Math.round(period);
  }

//   console.log(findPeriod(35873.5553))

 //rename the key avgAlt
//  function rename(arr) {
//      arr = arr.map(function (obj) {
         
//      })
//  }
  