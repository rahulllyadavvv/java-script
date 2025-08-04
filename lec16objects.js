//object made form constructor will be singelton
//object made from literals wont be a singleton object 
//objects is the most imp topic of javascript
//creating an object

//object.create method is used to make object throught constructor 
// we willl se it later on


//no we will be seeing how to make objects using literals 
//objects has key and values
const mySym =Symbol()
const JsUser = {
    name:"Rahul",
    "fullname":"Rahul Yadav", 
    "full name":"rahul yadav",//behind the scene  name is also taken as string by the compiler "name" 
    age:"18",
    [mySym]:"Hero",//correct method of to use symbol in object                 //mySym:"Hero",
    location:"Alwar",
    email:"rahulvlogs25@gmail.com",
    isloggedin:true,
    lastlogin:["monday","Tuesday"]
}
//there are two methods of accessing the key
//if the key is not written in string syntax is can be acessed by .(dot) method
//if the key is written in string syntax it can be accessed by ['keyname"] syntax
//example below
console.log(JsUser.name);
console.log(JsUser["fullname"]);
console.log(JsUser["email"]);
console.log(JsUser.email);
console.log(JsUser.fullname); //working bcs there is no spce int he name but it wont work if there is space in the name of key
console.log(JsUser["full name"]);
//console.log(typeof(JsUser.mySym)); //wrong syntax fro symbol
//console.log(JsUser.full name);
//correct way to acess the symbol
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));
console.log(typeof(mySym));



// JsUser.email="rahulyadav25@gmail.com";
// Object.freeze(JsUser);
// JsUser.email="RAHULYADAV@gmail.com";
// console.log(JsUser.email);
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello Rahul");
}
JsUser.greeting();

JsUser.useofthis =function(){
    console.log(` my name is ${JsUser.name} and age is ${this.age}`) //if we are refering to the same object we can aces the elemnts using the this syntax
}//if we are refering to the same object we can aces the elemnts using the this syntax
JsUser.useofthis();