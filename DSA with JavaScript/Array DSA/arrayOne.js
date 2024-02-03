

const arr = new Array();
// defining an empty array in js

// IN ARRAY WE CAN ASSIGN OBJECT, ANOTHER ARRAY, STRING, INTIGER, UNDEFINED  AS WELL
// WE CAN'T DEFINE THE NULL IN ARRAY
const arr2 = [1,2,3,4,5,6,[1,2,3], "harikesh",{name:"Coolboy"}, undefined];

// console.log(arr2);
// console.log(arr);

// HOW TO ACCESS ANY ELEMENT OF THE ARRAY
// console.log(arr2[8]);  
// for accessing the element in array the Time-Complexcity- O(1)
const arrlength = arr2.length;
// for the time complexity is O(1), regardless of the size of the array. The reason for this is that JavaScript arrays internally keep track of their length, so retrieving it is a simple and fast operation.
// console.log(arrlength);

// HOW DO YOU REMOVE LAST ELEMENT IN THE ARRAY?
const lastElement = arr2.pop(); //Time-Complexcity - O(1)  
// arr.pop  is pre- define function to remove the last element of the array 
// console.log(lastElement);


// HOW TO ADD A ELEMENT IN ARRAY?
 arr2.push("Agrahari");  // by push we can add element to the array which will add at the last of the array 
//  TIME COMPLEXCITY - O(1)
//  console.log(arr2);

//  for adding a element at first of the array we will use unshift and it will add the element at starting and make the changes
arr2.unshift(5);   // TIME COMPLEXCITY- O(N)
// console.log(arr2);

// SAME LIKE THIS SHIFT WILL REMOVE THE FIRST ELEMENT FROM THE ARRAY and made the changes
arr2.shift(); // TIME COMPLEXCITY - O(N)
// console.log(arr2);


// How do you loop over array in js?

// iteration with for loop
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);  
}

// iteration with forEach loop
// every single time when we use forEach loop we have to pass a function(callback function) in that, so it can be executed
arr2.forEach(function (harikesh, i) { // here in first argument we are passing arr and in second we are passing the index
    // console.log(harikesh);
})


// Iteration over Array with forOf Loop

for (let ele of arr2) {  // in forOf loop we have to pass element and the array itself
    
    console.log(ele);
}
