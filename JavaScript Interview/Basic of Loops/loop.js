// Sum of all natural numbers from 1 to n


// function sumOfNatural(num){
//     let sum =0;
// for (let i = 0; i < num; i++) {
//     sum = sum +i; 
// }
// return sum;
// }
// console.log(sumOfNatural(65));



// Sum of digit of the number
//  1287 = 1+2+8+7

// function sumOfDigit( number){
//     let sum = 0;
//     while (number>0) {
//         sum = sum + number%10;
//         number = Math.floor(number/10);
//         console.log(sum);
//     }
//    return sum;
// }

// console.log(sumOfDigit(12345));


// count the number of digit of a number

//  34567: 5 digit

function countOfDigit(num){
    let count = 0;
    // while (num>0) {
    // num = Math.floor(num/10);
    // count++;
    // }

    // here the while loops will not work of negative number or 0 so we have to use do while loop
    num = Math.abs(num);
    do {
        num = Math.floor(num/10);
        count++;
    } while (num>0);
    return count;
}

console.log(countOfDigit(0));