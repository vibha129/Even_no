function con(array) {
    var count=0;
    var fm=0;
  for (let i = 0; i < array.length; i++) {
  
    if(array[i+1]==0){
        count++;
        fm=Math.max(count,0);
    }
    else{
        count=0;
    }
  }
    return fm;
  }
  var arr = [1,0,1,1,1,1,1,1,1];
  console.log("Max  num  of consecutive 1's : " + con(arr));
