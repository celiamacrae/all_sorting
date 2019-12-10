function split(arr){
  let firstHalf=arr.slice(0,Math.ceil(arr.length/2));
  let secondHalf=arr.slice(Math.ceil(arr.length/2));

  return [firstHalf,secondHalf];
}
function merge(arr1,arr2){
  let finalArr=[];
  let originalLength=(arr1.length+arr2.length)
  while(finalArr.length<originalLength){
    if(arr1.length===0) {
      finalArr.push(arr2[0]);
      arr2.shift();
    }
    else if(arr2.length===0){
      finalArr.push(arr1[0]);
      arr1.shift();
    }

    if(arr1[0]<arr2[0]){
      finalArr.push(arr1[0]);
      arr1.shift();
    }
    else if(arr1[0]>=arr2[0]){
      finalArr.push(arr2[0]);
      arr2.shift();
    }

  }
  return finalArr;
}
function mergeSort(arr){

  if(arr.length>1){
    let left=mergeSort(split(arr)[0]);
    let right=mergeSort(split(arr)[1]);
   return merge(left,right);
  }
  return arr;
}
