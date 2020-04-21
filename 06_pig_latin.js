function translatePigLatin(str) {
    let regex = /[aeoiu]/g;


    
        if(str[0].match(regex)){
            return str+"way"
            
        }else if(str.match(regex) === null){
            return str+"ay"
        }
        else{
            let index = str.indexOf(str.match(regex)[0])
            return str.substr(index)+str.substr(0,index)+"ay"
        }
    

    
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("glove") );
  console.log(translatePigLatin("eight"));
  
  
  

