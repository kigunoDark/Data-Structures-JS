
function factorial(num)
{
  if(num===1)
  {
      console.log('This is all done');
      return 1;
  }
  return num * factorial(num-1);
}