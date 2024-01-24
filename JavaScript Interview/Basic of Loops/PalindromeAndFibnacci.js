// find the number is palindrome or not in the given number 

// let isPalindrome = function(num){
//     let copyNum = num;
//     let x = 0;

//     do {
//         x = x*10 + num%10;
//         console.log(x);
//        num = Math.floor(num/10); 
//     } while (num>0);

//         return x === copyNum;

// }

// console.log(isPalindrome(1));


// fibnacci series

//  0,1,1,2,3,5,8,13

// find the sum of given fibnacci series of n

let sumFib = function sumOfFibnacci(num){
    // base case we will check wheather the input is 0 or 1
    if(num<2){
        return num
    }

    //  logic behind checking the sum of fibnacci series
    let prev=0, cur = 1, next;
    for (let i = 2; i <= num; i++) {
        next = prev + cur;
        prev = cur;
        cur = next;
        
    }
    return next;
}

console.log(sumFib(5));