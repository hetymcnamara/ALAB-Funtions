/Take an array of numbers and return the sum.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
}
let arr = [2,3,4,5,8];
let result =  sumArray(arr)
console.log(result)
function sumArray1(num){
    let sum=0;
    let i =0;
    while(i<num.length){
        sum +=num[i];
        i++;
    }
    return sum;
}
let ArrNumbers = [2,3,4,5,8,9];
let total =  sumArray1(ArrNumbers)
console.log(total)
function sumArray2(numbers){
    let total =0;
    for(let number of numbers){
        total +=number
    }
    return total
}
let arrayNum = [2,3,4,5,8,10];
let sum =  sumArray2(arrayNum)
console.log(sum)
function sumArray3(arr){
    let sum=0;
    arr.array.forEach(element => {
        sum +=element;
    });
    return sum;
}
let arrayNum1 = [2,3,4,5,8,10,15];
let sum1 =  sumArray2(arrayNum1)
console.log(sum1)
//Take an array of numbers and return the average.
function arraySumAverage(numbers){
    let total =0;
    numbers.forEach(element=>{
        total +=element;
    })
    return numbers.length ===0 ? 0 : total /numbers.length;
}
let arrayNum2 = [2,3,4,5,8,10,15];
let average =  arraySumAverage(arrayNum2)
console.log(average)
//Take an array of strings and return the longest string.
function findLongestString(strings) {
    let longestString = “”;
    strings.forEach(string => {
        if (string.length > longestString.length) {
            longestString = string;
        }
    });
    return longestString;
}
let strArray = [‘hello’, ‘wonderful’, ‘cool’, ‘hi’, ‘bye’];
let longestString = findLongestString(strArray);
console.log(“Longest String:“, longestString);