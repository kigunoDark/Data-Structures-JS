function merge(arr, arr2)
{
  let answ = [];
  let i = 0;
  let j = 0;

   while(i < arr.length && j < arr2.length)
   {
     
     if(arr[i] < arr2[j])
     {
       answ.push(arr[i]);
       i++;
    
     } else if(arr2[j] < arr[i]) {
       answ.push(arr2[j]);
       j++;
     }
   }
   
     while(i<arr.length)
     {
       answ.push(arr[i]);
       i++;
     }

     while(j < arr2.length)
     {
       answ.push(arr2[j]);
       j++;
     }
  return answ;

}

function mergeSort(arr)
{
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
}

