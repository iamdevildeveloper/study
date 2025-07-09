function sumOfDigit(number) {
    var result = 0;
    number.toString().split("").forEach(element => {
        result += Number(element);
    });
    return result;
}
console.log(sumOfDigit(233));
console.log(sumOfDigit(1234));
console.log(sumOfDigit(555));
console.log(sumOfDigit(999));
console.log(sumOfDigit(111));
