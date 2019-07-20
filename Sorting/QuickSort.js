function pivorHelper(arr, start, end )
{
  function swap(array, i, j)
  {
    let temp = array[i];
    array[i] = array[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  var swapIndex = start;
  for(let i = start + 1; i < arr.length; i++)
  {
    if(pivot > arr[i])
    {
      swapIndex++;
      swap(arr,swapIndex,i);
 
    }
    
  }
  swap(arr,start,swapIndex);
 
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length-1)
  {
    if(left < right) 
{
    let pivotIndex = pivorHelper(arr, left, right);
//     left
  quickSort(arr,left,pivotIndex-1);
//   right
  quickSort(arr, pivotIndex+1, right);
}
  return arr;

}