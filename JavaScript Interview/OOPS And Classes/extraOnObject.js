// AS WE KNOW MATH.PI VALUE IS 3.141592653589793 AND NOW WE ARE CHECKING THAT IT CAN BE CHANGABLE OR NOT
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// THIS getOwnPropertyDescriptor Property define that what type of value and in depth properties is given to the object Output will like this:- 
// console.log(descripter);

// OUTPUT OF THIS
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);

// let's create a object and understand with example

const myName = {
    name: 'Harikesh',
    price: 250,
    isAvailable: true,
}

console.log(myName);

console.log(Object.getOwnPropertyDescriptor(myName, "name"));
// output of this value
// {
//     value: 'Harikesh',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// now we have to change these properties of this object so for that we will use defineProperty

Object.defineProperty(myName, "name", {
    writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(myName, "name"));
// now after changing the value of this it will be false
// {
//     value: 'Harikesh',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key,value] of Object.entries(myName)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// by setting this we can see that when we are going setting enumerable: true, we can iterate over the object other wise once we set enumerable: false, we cannot see this object on the output

