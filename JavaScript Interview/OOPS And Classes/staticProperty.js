class User{
    constructor(username){
        this.username = username   
    }

    consoleLog(){
        console.log(`Username: ${this.username}`);

    }

    // by using static we can stop the access of the particular method or property to a object which is created by this class
    static createId(){
        return `123`
    }
    // once we declare static this cannot be accessed by any function or methods
}

const user = User("Harikesh");

console.log(user.createId())
// it will throw an error here because 