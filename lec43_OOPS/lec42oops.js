//Javascript and classes 
//javascript is neither a class based programing language nor an object based programming language,
//it is an prototype based language,and its classes are primarily syntatic sugar over existing prototype-based inheritence mechanism.
//in the simple words it provides a more familiar syntax for developers coming from class -based languages like c++ or java but under the hood it works differently.


const user ={
    username:"Rahul",
    age:20,
    role:"SDE",
    "company name":"Google",
    printuserdetails: function(){
        //best practice to use this 
       // console.log(`Name:${username}`);
        console.log(`Name :${this.username}`) //this keyword is used to get the current context
        console.log(`Company Name :${this["company name"]}`)
        //we can also use the object name 
        console.log(`Name :${user.username}`)
        console.log(`Company Name:${user["company name"]}`)
        console.log(this)

    }

}

user.printuserdetails()
console.log(this); //important (if we do the same in browser we will get the window object)

////constructor function
//step by step process which occurs when we use new keyword.
// step1.when we use new keyword an empty object is created,which is called instance.
// step2.A constructor function is called due to new keyword.
// step3.All the arguments written with (this) keyword are injected in the object.
// step4.we get the data in function.
//(new) - it is a constructor function
//constructor allows to create multiple instances form one object literal

//let see whey we need constructors
function userdetails(name,age,isloggedin){
    this.name=name;
    this.age=age;
    this.isloggedin=isloggedin;
    this.greeting = function(){
        console.log(`Welcome ${this.name}`)
    }


    return this; //there is no need of explicitly returning (this) ,even if we dont explicitly return (this) it is automatically implicitly defined.
}

//code below ---
// //console.log(userdetails("Rahul",20,true)) //works fine
// let user_1 =userdetails("Rohan",20,true);
// let user_2 = userdetails("Mohit",20,false);
// console.log(user_1);

//it will print he details of mohit ,you wrote to print the detaisl of user 1 and it should print the details of rohan but
//this keyword overwrites the data //

//////////////----------------//////////////////-----------------/////////////////
//thats why  we use constructor as they create an entire new instance of the object literal
//we just need to add new keyword and it will creat a new instance 
let user_1 = new userdetails("Rahul",20,true);
let user_2 = new userdetails("Rohan",20,true);
console.log(user_1);
console.log(user_2);
console.log(user_2.greeting());
console.log(user_1.constructor);
console.log(user_1 instanceof userdetails); //tells whether an object is an instance of a specified constructor function or class. syntax :objectname instanceof constructorname


