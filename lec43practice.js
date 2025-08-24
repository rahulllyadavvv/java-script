//Array,string ,function are also objects in javascript

//important//
// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.
//  When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// So when we call myObject.toString(), the browser:

// looks for toString in myObject
// can't find it there, so looks in the prototype object of myObject for toString
// finds it there, and calls it.
// What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():
// Object.getPrototypeOf(myObject); // Object { }


//lets do some example
// let myname = "rahul   "
// myname.prototype.correctname = function(){
//     console.log(this.trim().length);      //length is a property so no paranthesis  while trim is a method so we are using parenthesis.
// }
// myname.correctname();

//this will thrown an error 
// The error is because you are trying to use .prototype on a string literal variable,
// but primitive values (like strings, numbers, booleans) don’t have a prototype property you can directly modify.
// prototype is only for constructor functions or classes (like String, Array, Function), not for already-created primitive values.

String.prototype.correctname = function(){
    console.log(this.trim().length);      //length is a property so no paranthesis  while trim is a method so we are using parenthesis.
};
let myname = "rahul   "
myname.correctname();

let myheroes =["thor","spiderman"]

const myhero ={
    name:"Thor",
    superpower:"Sling",
    'new power':"powergun",
    getnewpower :function(){
        console.log(`The new power of my hero is ${this['new power']}`)
    }
}

Object.prototype.allpowers = function(){
    console.log(`All the power are :${this.superpower},${this['new power']}`)
}
console.log(myhero.getnewpower());
console.log(myhero.allpowers());

console.log(myheroes.allpowers()); //array is also having aceess 

//if we are assigning a property to the prototype of  an object then the proper is accesible to array,function,string|| (objects- high level) ,arrays,string,fucntion low level )
//property assigned at teh high level is accessibel to the low level

//let try what if we assign a porperty to prototype of array will it be accessible by the objects.
Array.prototype.saymyname=function(){
    console.log('hi Rahul');
}
myheroes.saymyname();
//myhero.saymyname();

//inheritance
const user ={
    name:'chai',
    isloggedin:true
}
const teacher ={
    ispresent:true
}
const teachingsupport={
    isavailable:true
}
const tasupport ={
    makeassignment :'JS assignment',
    fulltime:true,
    __proto__:teachingsupport   //now tasupport has access to the properties of the teaching support
}


// we can also explicitly use  __proto__
teacher.__proto__ =user      //prototypal inheritence

////////////modern syntax /////////////////
Object.setPrototypeOf(teachingsupport,teacher); 
console.log(teachingsupport.ispresent)
//what object.setprototypeof does is genral ,if we acess a property  its firstly look in object if not present then in its prototype 
//now here we are difining an another object as a prototype to our object.
// so if we want to access a property it will  be first looked in the object if not present then in the newly assigned prototype object.
// simply inheritence by the protype object


let mynamee = 'rahul    ';
let anotherusername ='chaiourcode    ';
String.prototype.correctedusername = function(){
    console.log(this.trim().length)  //length is a property so no paranthesis while trim is a method so we use paranthesis with it.
}

anotherusername.correctedusername()
myname.correctedusername()
"vishwas   ".correctedusername()


























// function multiplyby5(num){
//     return num*5;
// }
// multiplyby5.power =2

// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);

// function createuser(username,score){
//     this.username = username;
//     this.score = score
// }

// createuser.prototype.increment = function(){
//     this.score++;
//     console.log(`${this.username} has a price of ${this.score}`)
// }
// const chai = new createuser("chai",25);
// const tea = new createuser("tea",250);

// chai.increment()
/////////////////////////////
// in js in general evrything is an object whether it is a string ,function ,array
//java script work on the principle of prototype,not classes not object but prototype
// 