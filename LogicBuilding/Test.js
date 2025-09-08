// console.log("Kishan");
// const numArray = [123455313221, 4, 6, 1100, 3, 2, 12, 15, 20, 14, 999, 98];
const numArray = [-123455313221, -4, -6, -1100, 1, -2, -12, -15, -20, -14, -999, -98];

// function findCountOfEvenAndOddNumberInArray(array) {
//     var evenNumbers = numArray.filter((e) => {
//         if(e % 2 === 0) return e;
//     });
//     var oddNumbers = numArray.filter((e) => {
//         if(e % 2 !== 0) return e;
//     });
//     console.log(`Even numbers are ${evenNumbers.length} and odd numbers are ${oddNumbers.length}`);
// }
// findCountOfEvenAndOddNumberInArray(numArray);

// function reverseString(string) {
//     var reversed = '';
//     string.split('').forEach(element => {
//         reversed = element + reversed ;
//     });
//     if(string == reversed) {
//         console.log(reversed + ' is a palindrome');
//     } else {
//         console.log(string, reversed);
//     }
// }

// reverseString('Kishan');
// reverseString('madam');
// reverseString('Hello');
// reverseString('Rahul');

// function printATable(forValue, range) {
//     for(i = 1; i <= range; i++){
//         console.log(`${forValue} X ${i} = ${forValue * i}`);
//     }
// }
// printATable(27, 98);


function findMaximumInArray(numArray) {
    var maximumNum = 0;
    numArray.forEach(element => {
        if(element > maximumNum) maximumNum = element;
    });
    console.log(maximumNum);
}
findMaximumInArray(numArray);
