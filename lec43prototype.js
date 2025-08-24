let myname ='rahul    ';
console.log(myname.length);
console.log(myname.trim().length);

let heropower ={
    thor:"hammer",
    spiderman:"sling",
    getspinderpower:function(newpower){
        console.log(`spidy power is ${this.spiderman} and ${newpower}`);
    }
}

let myarray=["rahul","mohit","golu","vishwas"]


console.log(heropower.getspinderpower());

console.log(heropower.getspinderpower(""));

console.log(heropower.getspinderpower("power gun"));

Object.prototype.rahul = function(){
    console.log('rahul is present in all objects');
}
//give power to array and checking whether object can also use it or not 
Array.prototype.heyrahul = function(){
    console.log("Testing array prototype")
}

console.log(heropower.rahul())
console.log(myarray.rahul()) //array can also access the power of object 
//console.log(heropower.heyrahul()) //power given to the array cant be accessed by the object.
console.log(myarray.heyrahul()) 

//inheritance

const user ={
    name: "Rahul",
    email:"rahul@google.com"
}

const teacher ={
    makevideo: true
}

const teachingsupport={
    isavailable:false
}
const tasupport ={
    makeassignment : "JS Assignment",
    fulltime: true,
    __proto__: teachingsupport 
}
teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)
//teaching support can access all the properties of teacher


//now lets get back to our main agenda it was to make a property for all the strings  which tells the length of string excluding the spaces. 
let username = "rahul   "

String.prototype.removespace=function(){
    console.log(this.trim().length)    //length is a property so no paranthesis while trim is method so we add paranthesis.
}

console.log(username.removespace());
