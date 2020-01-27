function repeatedString(s, n) {
    // MySolution
    // let map = new Map();
    // let max = 0;
    // for(let i = 0; i< n; i++){
    //     s +s;
    // }
    // if(s.length > n) {
    //     s = s.slice(0, s.length - (s.length-n))
    // }
    // console.log(s.length)
    // for(let i of s) {
    //     if(!map.get(i)) {
    //         map.set(i, 1);
    //     } else {
    //         map.set(i, map.get(i) + 1);
    //         if(max < map.get(i)) {
    //             max = map.get(i);
    //         }
    //     }
        
    // }
    // console.log(max)

    const counta = (s) => s.split('')
            .filter(c => c =='a')
            .length;

    const d = Math.floor(n / s.length);
    console.log(d);
    const r = n - (s.length * d);
    console.log(r)
    return d * counta(s) + counta(s.substr(0,r))
  
    
}

console.log(repeatedString('abc', 1000000000000))