function EvenNum(num ){
    var temp=[];
    for(var i=0; i<num.length;i++){
        if(num[i]%2==0){
            temp.push(num[i])
        }
    }
    return temp;
}
console.log(EvenNum([2,4,3,9,5,10]));