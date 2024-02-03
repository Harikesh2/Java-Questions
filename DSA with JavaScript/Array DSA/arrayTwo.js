
// how do you check the element exist in array or not?

let arr1 = new Array();
arr1 = [1,2,3,4,5]

const checkElement = function (arr,target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
    }
    return false;
}

console.log(checkElement(arr1, 7))

// WE HAVE A PREDEFINE FUNCTION IN JAVASCRIPT KNOW AS INCLUDE 

console.log(arr1.includes(1));


// SAME TYPE QUESTION FIND THE INDEX OF THAT ARRAY

// we have a predefine function for that  
console.log(arr1.indexOf(4));



// HOW TO DELETE, ADD AND UPDATE ELEMENT FROM SPECIFIC INDEX

// the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

// SYNTAX: splice(start, optional delete count, optional items to add)
console.log(arr1.splice(2, 2, 7,12,12,12));
// after arr1[1] index we can add long list of number which we have to add in the list of that array!!
console.log(arr1);


// The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

// SYNTAX : slice(optional start parameter, optional end parameter)

console.log(arr1.slice(0,4));



//  SPLICE VS SLICE 

// Read more about splice and slice
const url = "https://www.geeksforgeeks.org/what-is-the-difference-between-array-slice-and-array-splice-in-javascript/"


// SHALLOW COPY IN JS 

const arrB = arr1;
console.log(arrB);
// now if we made any changes in the arrb it will change in the arr1 one because it's pointing to the same memory location, so to avoid those condition in we use Deep Copy


// DEEP COPY IN JS

const arrD = [...arr1];  // BY USING SPREAD OPERATOR IT WILL SPREAD THE PARTICULAR WHOLE ARRAY AND ASSIGN NEW MEMORY HEAP TO THE NEW ARRAY


const arrDeepCopy2 = Array.from(arr1);
// here we are also creating deep copy but with different approach

const arrDeepCopy3 = arr1.concat();
// creating again deep copy with new approach 

// Now if we made changes in that it will happen to only to the new array..



// HOW TO ADD TWO ARRAY IN JAVASCRIPT?

// FIRST APPROACH OF ADDING TWO ARRAY
const newArr = [...arr1, 1,2 ,3 ,4, ...arrB]

// SECOND APPROACH OF ADDING TWO ARRAY
const newArr2 = arr1.concat(arrB);
// passing the arrB in the concat so it can be added in new array


// QUESTION 3 : How can we check if two array are equal or not?

function checkArrayEquality(array1 , array2) {
    if(array1.length !== array2.length){
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
       if (array1[i] !== array2[i]) {
        return false
       }  
    }
    return true;
    
}

console.log(checkArrayEquality([1,2,4],[1,2,3,4]));
