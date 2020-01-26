function equalizeArray(arr) {
   let map = new Map();
   let max = 1;
   for(let i of arr) {
      
       if(!map.get(i)) {
           map.set(i , 1)
       } else {
           map.set(i, map.get(i) + 1);
           if(max < map.get(i)) {
               max = map.get(i);
           }
       }
   }
   return arr.length - max;
}

console.log(equalizeArray([3,3, 2, 1, 3]))