function spinalCase(str) {
    return str
    .split(/\s|_|(?=[A-Z])/g)
    .join("-")
    .replace("--","-")
    .toLowerCase()
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("The_Andy_Griffith_Show") )
  console.log(spinalCase("AllThe-small Things"));
//   \s|_|(?=[A-Z])