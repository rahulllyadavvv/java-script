class user{
    constructor(username,email,password){
        this.username = username;
        this.email =email;
        this.password = password;
    }


    encryptpassword(){
        const rnum = Math.ceil(Math.random()*10 +1);
                return `${rnum}${this.password}`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new user("Rahul","rahulvlogs25@gamil.com",1234)
console.log(user1.encryptpassword());
console.log(user1.changeusername());


////behind the scene 
function userr(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
userr.prototype.encryptpassword = function(){
    const rnum = Math.ceil(Math.random()*10 +1);
                return `${rnum}${this.password}`

}
userr.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`

}
const user2 = new userr("Rahul","rahulvlogs25@gamil.com",1234)
console.log(user2.encryptpassword());
console.log(user2.changeusername());


