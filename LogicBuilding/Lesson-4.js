// console.log("Modified through Linux");
// console.log("Lesson 4 problem");

function returnFactorial(number) {
	var result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i
    }
    return result;
}

console.log(returnFactorial(6));
