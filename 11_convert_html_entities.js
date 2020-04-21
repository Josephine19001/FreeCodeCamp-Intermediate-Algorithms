function convertHTML(str) {
    let regex = /[&|<|>|'|"]/g
    function entities(symbol){
        switch(symbol){
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&apos;";
        }
    }
    return str.replace(regex,entities);
  }
  
  console.log(convertHTML("Schindler's List"));