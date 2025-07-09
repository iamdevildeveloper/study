// Leap Year
function isLeapYearOrNot(year) {
    return (year % 4) == 0 ? true : false;
}
console.log(isLeapYearOrNot(2008));
console.log(isLeapYearOrNot(1997));
console.log(isLeapYearOrNot(1998));
console.log(isLeapYearOrNot(2003));
console.log(isLeapYearOrNot(2023));
console.log(isLeapYearOrNot(2024));
