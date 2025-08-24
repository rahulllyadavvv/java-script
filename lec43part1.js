function multiplyby5(num){
    return num*5
}
multiplyby5.power=2
console.log(multiplyby5(8));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype); // in JS everything is a object function is a function as well as a object.
//prototype of anything in js can  go upto the level of obejct ,prototype of object will be null.
function createuser(username,score){
    this.username=username; 
    this.score = score;
}
createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printme = function(){
    console.log(`Username is ${this.username}`)
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai",25);
const tea = new createuser("tea",250);

chai.printme();
/*
Behind the scene what happens when the new keyword is used:
a new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created Object gets liniked to the prototype Property of the constructor function.This means
that it has access to properties and methods defined on the constructors prototype.

The constructor is called:the constructor fucntion is called with specified arguments and this is bound to the newly created object.
if no explicit return value is specified from the constructor,javascript assumes this,
the newly created object,to be the intended return value.

The new object is returned:After the constructor fucntion has been called ,if it doesnt return a non-primitive value (object,array,function,etc)
the newly created obejct is returned.
*/

