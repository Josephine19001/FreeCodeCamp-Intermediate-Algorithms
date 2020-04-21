function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let len = str.length

    for(var i = start; i <start+len;i++){
        if(!str.includes(alphabet[i])){
            return alphabet[i]
        }
    }
    return undefined
  }
  
  console.log(fearNotLetter("abce"));
  
  