function bubbleSort(arr) {

  let ok;

  do{
    ok=false;
    for(let i=0;i<arr.length-1;i++){

      if(arr[i]>arr[i+1]){
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        ok=true;
      }
    }

  }while(ok!==false)

return arr;
}
