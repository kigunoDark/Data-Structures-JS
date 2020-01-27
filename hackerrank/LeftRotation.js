
function rotLeft(a, d) {
    let arr = a;
    let snumb = 0;

    for(let i = 0; i < d; i++) {
        snumb = arr.shift();
        arr.push(snumb)
    }
 
    return arr;
}

console.log(rotLeft(arr,10))