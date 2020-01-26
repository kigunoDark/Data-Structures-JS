function jumpingOnClouds(c) {
    let count = 0;
    for(let i = 0; i < c.length; i++) {
        if(i+2 < c.length && c[i+2] === 0) {
            i++;
        }
        count++
    }
    return count-1;
}


console.log(jumpingOnClouds([0, 0, 1, 0 ,0, 0,1,0]))