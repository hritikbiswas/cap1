function replaceSpace(str){
    let newStr="";
      for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            newStr+="-"
        }
        else newStr+=str[i]
      }
      return newStr;
}
let str="The quick brown fox jumps over the lazy dog";
console.log(replaceSpace(str));

