// Write a function to check if the char is a small case or not.

function character(char){
    let strs="abcdefghijklmnopqrstuvwxyz";
    let isSmall=true;
    for(let i=0;i<strs.length;i++){
        if(char===strs[i]){
            isSmall=false; 
        }
        else isSmall==true
    }

    if(isSmall==true){
        console.log("the given character is not small case");
    }
    else console.log("the given character is small case");

}
let char='S';
character(char)