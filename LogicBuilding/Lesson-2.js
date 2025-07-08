// Problem 4 : Write a function that will tell if a given number is odd or even
// function checkOddEven(number) {
//     const calculated = number % 2;
//     if(calculated === 0) {
//         return 'even';
//     } else {
//         return 'odd';
//     }
// }
// console.log(checkOddEven(-1998));
// console.log(checkOddEven(-199));
// console.log(checkOddEven(-17));
// console.log(checkOddEven(2001));
// console.log(checkOddEven(200));

// Problem 5 :  function that finds the smallest of three numbers
function getSmallestNumber(a, b, c){
    if(a < b && a < c){
        return a;
    } else if(b < c){
        return b;
    } else {
        return c;
    }
}
console.log(getSmallestNumber(122, 12, 122));