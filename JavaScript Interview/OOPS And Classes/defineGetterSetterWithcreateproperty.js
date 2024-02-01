

// FUNCTION BASE SYNTAX FOR USING GETTER AND SETTER
function User(email, password) {
    this._email = email,
    this.password = password,
    // here we are using the defineProperty were you can set the email and password with getter and setter by using defineProperty

    // basic syntax of defineProperty is here 
    // first we have to pass the this because here we have to refer to current context
    Object.defineProperty(this,'email',{
        get: function () {
            return this._email.toUpperCase();
            
        },
        set: function (value) {
            this._email = value
        }
    })
    
}


const newUser = new User("h@h.com", "1234")

console.log(newUser.email);