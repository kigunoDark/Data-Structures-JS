// Version of mine
function insertion(arr)
{
  for(let i = 1; i<arr.length; i++)
  {
    for (let j = i-1; j >= 0; j --)
    {
      if(j != 0)
      {
        if(arr[i] < arr[j-1]){
          [arr[i], arr[j-1]] = [arr[j-1], arr[i]];
        }
      }
    }
  }
  return arr;
}

// Also a good option
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
      for(let j = i+1; j >= 0; j--){
        if(arr[j] < arr[j-1]){
          [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }
      }
    }
   
    return arr;
  };

// Version of teacher

function insertion(arr)
{
  var currentVal;
  for(var i = 1; i<arr.length; i++)
  {
    currentVal = arr[i];
    for (var j = i-1; j >= 0 && arr[j] > currentVal; j --)
    {
     arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}
insertion([2,1,9,76,4])
