
 // HOW TO SORT AN ARRAY IN ASCENDING AND DECENDING ORDER?

 const x = [2,4,5,1,9,10,100];


//  for sorting in ascending order in js
   x.sort((a,b)=> (   // TIME-COMPLEXCITY - O(N-log-n)
    a- b,
    console.log(a-b)
    ))
  console.log(x);


//   for sorting in decending order in js

const x2 = [2,4,5,1,9,10,100];

x2.sort((a,b)=>(b-a)) // TIME-COMPLEXCITY - O(N-log-n)

console.log(x2);

// how to reverse an array in js

const x3 = [1,2,3,4,5,6];

function reverseArray(arr) {
    let start = 0, end = arr.length;
    for (start; start < end; start++) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        end--
    }
    return arr
}

console.log(reverseArray(x3));

// sort-cut function in js
// const x3 = [1,2,3,4,5,6];
console.log(x3.reverse());