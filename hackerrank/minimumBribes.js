function minimumBribes(q) {
    let count = 0;
    let str = '';

    for(let i = 0; i < q.length; i++) {
        if(q[i] - q[i+1] > 2) {
             str = 'Too chaotic';
             break;
        }
        for(let j = Math.max(0, q[i] - 2); j < i; j++) {
            if(q[j] > q[i]) count++;
        } 
    }  
    if(str.length > 0) {
        console.log(str);
    }  else  {
        console.log(count);
    }
}


console.log(minimumBribes([2, 5, 1, 3, 4]))
