// Method
// A method is a function that belongs to an object.
// It is defined as a property of an object and usually operates on that object’s data.
// Function
// A function is a block of code that can be called independently.
// It is not tied to any object.

//////////////////////////////CODE////////////////////////////////////////////////////////////////////////////// 

// class user {
//     constructor(username){
//         this.username = username;
//     }

//     logme(){
//         console.log(`Username: ${this.username}`);
//     }

//      createid(){ //static keyword is used inside classes to restrict the access of the property to the objects(instances) created from the class.
//         const random = Math.ceil(Math.random() *10 +1);
//         const id = `UserID : user${random}`
//         return id
//     }
  
// }

// const user1 = new user("Rahul");
// console.log(user1.createid());
// console.log(user1.logme());
// console.log('|||||||||||||||||||||');
// //console.log(user.createid()); can be only used if createid is static ,else cant  be directly accessed, it can  only be accessed by the instance of the class.

// class manager extends user{
//     constructor(username,email,managername){
//         super(username);
//         this.managername = managername;
//         this.email = email;
//     }

//     logdetails(){
//         console.log(`Username :${this.username}\nEmail:${this.email}\nManager:${this.managername}`)
//         this.logme();
//         console.log(this.createid());
//     }

// }
// //class constructor cannot be invoked without new keyword.
// const manager1 = new manager("rohit",'rohit@gamil.com',"Rahul")
// manager1.logdetails();
// console.log("||||||||||||||||||||||||||");
// manager1.logme();
// console.log(manager1.createid());


//////////////////doinng the same above example using static /////////

class user {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createid(){ //static keyword is used inside classes to restrict the access of the property to the objects(instances) created from the class.
        const random = Math.ceil(Math.random() *10 +1);
        const id = `UserID : user${random}`
        return id
    }
  
}

const user1 = new user("Rahul");
//console.log(user1.createid());
console.log(user1.logme());
console.log('|||||||||||||||||||||');
console.log(user.createid()); //can be only used if createid is static ,else cant  be directly accessed, it can  only be accessed by the instance of the class.

class manager extends user{
    constructor(username,email,managername){
        super(username);
        this.managername = managername;
        this.email = email;
    }

     logdetails(){
        console.log(`Username :${this.username}\nEmail:${this.email}\nManager:${this.managername}`)
        this.logme();
       // console.log(this.createid());
    }

}
//class constructor cannot be invoked without new keyword.
const manager1 = new manager("rohit",'rohit@gamil.com',"Rahul")
manager1.logdetails();
console.log("||||||||||||||||||||||||||");
manager1.logme();
//console.log(manager1.createid());
console.log(user.createid());
//user.logme();
