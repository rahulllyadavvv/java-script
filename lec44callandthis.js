function setusername(username){
    this.username = username;
}

function createuser(username,email,password){
    // setusername(username) //function is getting called,execution context is also there,but there is no reference hold  ,only the reference is given ,now we will explicity call the function to hold the reference
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const user1 = new createuser("rahul","Rahul@gamil.com",2004)
console.log(user1);