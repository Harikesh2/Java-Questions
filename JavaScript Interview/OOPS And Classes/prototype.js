let myName = "Harikesh     ";


// here we want a property of finding the element true length without the space 
// so for that we have add this property in the Object 
// console.log(myName.length());

let anotherString = "asdfghjkl asfsdfasdf  ";


// here we are creating a new function in the prototype of string where we are adding a function truelength in which we get the exact value fo the length size
String.prototype.trueLenght = function () {
    console.log(this);
     console.log(this.trim().length)
}
anotherString.trueLenght();


// let's understand with an example

let myHeros = ["thor","Siperman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSiperPower: function(){
        console.log(`Spidy power is ${this.spiderman} `);
    }
}

// here we are injecting a property in the object so it is avaiable in both array and object becuase prototype will go like this 
Object.prototype.harikesh= function () {
    // console.log(`Harikesh is Present in all Object!!`);
}

// heroPower.harikesh();
// myHeros.harikesh();

// so here we can see that when the prototype is given to the object it will access by all the declared variable but once we declare to the one array or a string it will acessed by only by them!!
// ARRAY ---------------------------------------OBJECT------------------------null
	//                                              |
//                                                  | 
    //                                              |
    //                                          string
    // 


// in this case we are adding this only in array so it will not accessed by the other objects 
Array.prototype.hiHarikesh = function () {
    console.log(`Hi Harikesh in the Array`);   
}

// myHeros.hiHarikesh();
// heroPower.hiHarikesh();


// INHERITANCE


const User ={
    name: "Harikesh",
    email: "h@h.com"
}
const Teacher  = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvaiable: false,
}
const TASupport = {
    makeAssignment : "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport,
    // by writing this we can give the access of quality other object to this object and this makes in prototype inheritance
}

Teacher.__proto__ = User
// here we are adding the User properties in the teacher by using proto and this is Old syntax of doing it

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);