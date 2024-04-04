
let data={
name:["Rice", "Dal", "Salt"],
quantity:[2, 3, 1],
price:[60, 50, 20],
total:function(){
    let ans=null;
    for(let i=0;i<this.name.length;i++){
         ans+=this.quantity[i]*this.price[i];
    }
    return ans;
}

}

console.log(data.total())