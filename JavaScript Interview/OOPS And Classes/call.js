
// ATTACHED A IMAGE IN THIS SO IT WILL BE MORE CLEAR



function setUsername(username){
    // Complex  calculation
    this.username = username;
}

function createUser(username,email, password) {
    setUsername.call(this,username);
    // here first we are using call to call the function and passing {this} instance of current context because what is happening is that after execution those value of current context is getting removed and than afterward we are not able to catch it so that's why we are using this and call to get the value of that context

    this.email = email;
    this.password = password;
}

const newUser = new createUser("Harikesh", "h@h.com","asdfghj");
// here very important thing is that we have to use new to create a new instance of the function so we can write the value
console.log(newUser);