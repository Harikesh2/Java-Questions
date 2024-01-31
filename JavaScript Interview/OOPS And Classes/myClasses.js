// ES6


// THIS IS THE BASIC IMPLEMENTATION OF THE CLASS 
// class User{
    // HERE WE ARE CREATING THE CONSTRUCTOR
//     constructor(user,email,password){
//         this.user = user,
//         this.email = email,
//         this.password = password
//     }
        // DEFINING THE METHODS 
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.user.toUpperCase()}`
//     }
     
// }
// CREATING A NEW INSTANCE OF THE CLASS WHICH IS OBJECT
// const userName = new User("Harikesh", "h@h.com", "12345");

// console.log(userName.changeUserName());


// behind the scene when we are not creating the class

// SAME THING IN ES6 is changed we are defining the function 
function User(user, email,password) {
    this.user = user,
    this.email = email,
    this.password = password 
}
// adding the methods by the prototype and defining the method
User.prototype.encrptPassword = function (password) {
    return `${this.password}sdfg`
    
}
// creating the new object here new is working as a constructor
const newUser = new User("Harikesh","h@h.com","1234");
console.log(newUser.encrptPassword());

