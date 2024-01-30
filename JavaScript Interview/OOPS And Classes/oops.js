// object literal

const User = {
    // these are the properties of object 
    username: "Harikesh",
    loginCount: 8,
    signedIn: true,

    //   this is method in the objects
    getUserDetails: function () {
        // console.log("Got user data from the Database");
        console.log(this.username);
        // this define about the current context in which we are using the methods
        console.log(this);
        // this statement will print the current context of the this and return the object like this:
        // {
        //     username: 'Harikesh',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }


    }
}

console.log(User.getUserDetails());

console.log(this);
// this one show us a empty object where the output will be {} so by this we can say that this is a empty Object 

// const promise  = new Promise()
// here new keyword denotes a constructor where we are creating new Instances
const date =  new Date()
// here the same thing in date as well


function Users(username, loginCount, isLoggedIN) {
    this.username = username
    // here we are storing the details of username in this object because we have seen that this is nothing but a empty object
    this.loginCount = loginCount
    this.isLoggedIN = isLoggedIN

    return this
    
}

const userOne = Users("harikesh",3, true)
const userTwo = new Users("Cool",3, true)
//  writing new is very important because it's create a new instance 
// BASICALLY NEW IS DEFINE AS A CONSTRUCTOR , WHEN EVER WE DECLARE NEW IT WILL CREATE A NEW OBJECT (INSTANCE), SECOND STEP WILL BE A CONSTRUCTOR CALLED AND STORED VALUE IN THE OBJECT AND WE GET IT!!
console.log(userOne);