// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// for creating a promise we have to create a instance of the promise in that we have to pass a function of resolve and reject so it can handle in better manner


// FIRST APPROACH OF PROMISE
const promiseOne = new Promise(function (resolve,reject) {
    // Do a async task
    // DB calls, cyptography, network

    setTimeout(function () {
        // console.log("Async task Complete ");
        resolve();
        // IT'S VERY IMPORTANT TO RESOLVE THE PROMISE OTHERWISE IT WILL NOT GO TO THEN OPTION 
    },1000);
})

// in .then we get the RESOLVE But before that we have to call this resolve in promise
promiseOne.then(function () {
    // console.log("Promised Consumed");
})


// SECOND APPROACH OF PROMISE


new Promise(function (resolve,reject) {
    setTimeout(function () {
        // console.log("Async  2 task Complete ");
        resolve();
        // it's IMPORTANT to resolve it other wise it will not go to the resolve
    })
}).then(function () {
    // console.log("async 2 resolve");
    
})



// THRID APPROACH OF PROMISE
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function (params) {
        resolve({name: "Harikesh", email: "h@h.com" });
        // in this case we are passing some data in the resolve so it can be get by the then which we are sending
    },1000)
})

promiseThree.then(function (user) {
    // console.log(user);
})


// FOURTH APPROACH OF HANDLING THE PROMISE


const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false;
        if(!error){
            resolve({user: "Harikesh", email: "h@h.com"})
        }else{
            reject(error);

        }
    })
    
})


// This syntax is basically a chaining in the promises so that when we have to get a particular item form the object which is passed in the promised
promiseFour
.then(function (user) {
    return user.email
//  here we are passing the Object value to second .then so we can access it because in the first one we have only whole object and in second we are passing a particular element 
})
.then(function (user) {
    console.log(user);
})
.catch(function (error) {
    // console.log(error)
    // this catch is used for the catching the error and handling it!!
})
.finally(function () {
    // console.log("The promise is either resolved or rejected");

})

// FIFTH APPROACH OF HANDLING PROMISE

const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true;
        if(!error){
            resolve({user: "javascript  ", email: "h@h.com"})
        }else{
            reject('Error: js went Wrong');

        }
    })
    
})


// here we are handling promise with async and await where first create a function than pass the promise with await 
async function consumePromiseFunction(){
    try {
    const response = await promiseFive
    console.log(response);
    } catch (error) {
    console.log(error);
    }
}

consumePromiseFunction();