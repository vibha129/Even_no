function twiceNo(arr){
    var m=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            m=arr[i]+'';
        }
    }
    return m;
}
console.log(twiceNo([1,7,7,4,5]));