function hourglassSum(arr) {
    maxX = 3; // + (arr[0].length % 3)
    maxY = 3; // + (arr.length % 3)
    total = -Infinity;  // has to be -64, but
 
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = 0; j < arr.length -2; j++) {
            // top
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            
            // middle
            sum += arr[i+1][j+1];

            // bottom
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

            if(total < sum) {
                total = sum;
            }
        }
    }
    
    console.log(total);

}
console.log(hourglassSum([
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0],
]))