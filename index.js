function LongestWord(sen) { 
  let array = sen.split(" ");
  // code goes here  
  let maxLength=0;
  let maxString = "";
  let i=0;
  while(i<array.length){
    if(array[i].length>maxLength){
      maxLength=array[i].length;
      maxString=array[i];
    }
    i++;
  }
  return maxString;
}

// keep this function call here 
console.log(LongestWord("hey i love u nandu nandy pandi pillaa nandu"));