
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}


function digitCount(num)
{
  if (num === 0) return 1;
  return Math.floor(Math.log10((Math.abs(num)))) + 1;
}

function mostDigits(nums) {
  let maxdigits = 0;
  for(let i = 0; i < nums.length; i++)
  {
    maxdigits = Math.max(maxdigits, digitCount(nums[i]));
  }
  return maxdigits;
}

function radixSort(numS)
{
  let maxdigitCount = mostDigits(numS);
  for(let k=0; k < maxdigitCount; k++)
  {
    let digitBuckets = Array.from({length: 10} , () => []);
    for(let i = 0; i < numS.length; i++)
    { let digit = getDigit(numS[i],k);
     digitBuckets[digit].push(numS[i]); 
    }
    numS = [].concat(...digitBuckets);
  }
  return numS;
}

