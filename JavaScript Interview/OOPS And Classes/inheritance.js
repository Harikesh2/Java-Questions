class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Welcome here ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email, password ){
        super(username)
        // here we are not using any call or this keywords because it's predefine in the super and it will do the all operations
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const newTeacher = new Teacher("Harikesh", "h@h.com", "11234");
// this newTeacher can accessed the methods of extended class,
newTeacher.addCourse();

const newUser = new User("Harry Potter");

newUser.logMe();
newTeacher.logMe();

console.log(newUser instanceof Teacher);
// here we can check wheather our object is the instance of that particular class
// and by this we can say it's the instance of that class
