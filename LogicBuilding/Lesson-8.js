// Find maximum num in array

function findMaximumNumInArray(array) {
    var maximum = array[0];
    array.forEach(element => {
        if(element > maximum){
            maximum = element;
        }
    });
    console.log(maximum);
}
// const numArray = [1,6 , 2, 5, 10];
const numArray = [-100, -6 , -2000, -5, -10];

findMaximumNumInArray(numArray);
