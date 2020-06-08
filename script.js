class User{
    static canSendMessage = true;
    name = 'Unknown';
    password ='Password';
    constructor (name, password){
        this.name = name;
        this.password = password;

    }
    sendMessage(msg){
        console.log(msg)
    }
}

/*==============================*/
class SuperUser extends User {
    name;
    password;
    static createdUser = [];

    setUser(newUser){
        if (this.name){
            return;
        }
        this.name =  newUser;
    }

    constructor (name, password){
        super (name, password);
        
    }
    getCreatedUser(){
        return this.newUser;

    }
    createUser(newUser,pass){
        createUser.push(newUser);
        return createUser;

    }

}