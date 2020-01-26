// Factorial is easy for me
// let factorial = (n) => {
//     if(n === 0) return 1;
//     return n * factorial(n-1);
// }

// ПЕРЕКЛЮЧАЮСЬ НА ВРЕМЯ

// var gcd = function(a, b) {
//     console.log (2 % 3)
//     if ( ! b) {
//         return a;
//     }

//     return gcd(b, a % b);
// };
// console.log(gcd(48, 36));


// Function Range solved
// let arr = [];

// let range = (x, y) => {
//     if(y-x === 1) return 1;

//     arr.push(1+x)
//     return range(x+1, y);
// }

// range(2, 9)

// console.log(arr);

// Finished sum of array
// let sumOfArray = (arr) => {
//     if(arr.length === 1) {
//         return arr[0];
//     }
//     return arr.pop() + sumOfArray(arr);
// }
// console.log(sumOfArray([1, 2, 3]));

// let exponent = (b, e) => {
//     if(e === 0) {
//         return 1;
//     } else {
//         return b * exponent(b, e-1)
//     }
// }

// console.log(exponent(2, 3));


// let recurtion = (n) => {
//     if(n === 1) return 1;
//     return recurtion(n-1) + " " + n;
// }

// console.log(recurtion(6));

// let retuenAbtnB = (A, B) => {
//    if(A === B) return B;
//    if(A > B)  return A + " " + retuenAbtnB(A-1, B);
//    if(A < B) return A +  " " + retuenAbtnB(A+1, B);
// }

// let akerman = (m, n) => {
//    if(m === 0) {
//       return n + 1;
//    } else if ( m > 0 && n === 0) {
//       return akerman( m-1, 1);
//    } else  {
//       return akerman(m-1, akerman(m, n-1))
//    }
// }

// let exactPower = (n) => {
//    if(n === 1) return "Yes";
//    if( n % 2 === 0 )  {
//      return exactPower(n/2);
//    };    
//     return "No";
// }


// Вывод цыфр числа в разные стороны рекурсией
// console.log(exactPower(8));

// let reverseNumb = (n) => {
//    if(n < 10) return n;
//    // console.log(n % 10 + " ");
//    return  n % 10 + " "  + reverseNumb(Math.round(n / 10));

// }


// let palindrom = (str) => {
//    if(str.length === 0) return 'Yes';
//    let up = str[0].toUpperCase();
//    if(str[0] !== up) {
//       str = str.slice(1);
//       return palindrom(str);
//    } 
//    return 'No';
// }
// console.log(palindrom('vlAd'));

// https://habr.com/ru/post/275813/


