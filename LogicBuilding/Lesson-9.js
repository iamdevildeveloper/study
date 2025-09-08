function isStringPalindrome(data) {
    var reversedString = '';
    data.split("").forEach(char => {
        reversedString = char + reversedString;
    });
    return reversedString == data;
}
console.log(isStringPalindrome('Kishan'));
console.log(isStringPalindrome('retupmoC'));
console.log(isStringPalindrome('madam'));
