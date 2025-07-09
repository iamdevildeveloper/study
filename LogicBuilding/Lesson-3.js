// Problem : Creating a JavaScript function that can reverse a string!
function reverseAString(data) {
    var reversedString = '';
    data.split("").forEach(char => {
        reversedString = char + reversedString;
    });
    return reversedString;
}
console.log(reverseAString('Kishan'));
console.log(reverseAString('retupmoC'));
