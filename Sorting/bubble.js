function buble(arr)
{
   let noSwaps = true;

  for(let i = arr.length; i > 0; i--)
  {
     
    for( let j = 0; j < i-1; j++)
    {
      console.log(arr, arr[j], arr[j+1]);
     
      if(arr[j] > arr[j+1])
      {
        let a = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = a; 
        noSwaps = false;
      }

    }
     if(noSwaps) break;
  }
       return arr;
}
