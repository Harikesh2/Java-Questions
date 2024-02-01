// HERE WE ARE USING THE GETTER AND SETTER FOR SETTING THE EMAIL AND PASSWORD


class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
// WHEN WE ARE SETTING THE GETTER AND SETTER BOTH NAME SHOULD BE SAME!!
// IN GETTER WE HAVE TO RETURN THE VALUE GENERALLY
    get password(){
        return this._password.toUpperCase();
        // return`${this._password}harikesh` we can also change the password by doing like this!!
        // here we have to do the same thing with get so that it can show us the value which is present there!!

    }
// HOWEVER IN THE SETTER WE HAVE TO PASS THE VALUE
    set password(value){
        // this.password = this.password BY WRITING THIS WE GET 
        // Maximum call stack size exceeded because constructor and the getter setter is setting the value one by one so that's the reason our Stack is getting fulled!!
        this._password = value.toUpperCase();
        // here just by making small different we are getting the right value but the same thing we have to do with set otherwise we will get the same error there!!
       

       
        
    }
    // SAME THING DOING WITH EMAIL
    get email(){
        return this._email
        
    }
    // here we cannot return anything!!
    set email(value){
        this._email = `${value}sd`

    }


}

const myUser = new User("h@h.com", "asdf");

console.log(myUser.email);