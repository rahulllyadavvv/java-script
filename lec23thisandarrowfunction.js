//this is used to refer the current context
//context means jiske bare mein baat ho rahi ho 
//case1
// const Userdetails= {
//     name:"Rahul",
//     companyname:"Adobe",
//     salary: 250000,
//     printdetails: function(){
//         console.log(`${Userdetails.name} is working in ${Userdetails.companyname} at a salry of ${Userdetails.salary}`)
//     }
// }
// Userdetails.printdetails()
// Userdetails.name ="Mohit"
// Userdetails.printdetails()

//now we see what happens if we directly use the key names
// const Userdetails= {
//     name:"Rahul",
//     companyname:"Adobe",
//     salary: 250000,
//     printdetails: function(){ //will give error cant use this way
//         console.log(`${name} is working in ${companyname} at a salry of ${salary}`)
//     }
// }
// Userdetails.printdetails()

//the way is to use the this fucntion it gives the reference to the current context

const Userdetails = {
    name:"Rahul",
    companyname:"Adobe",
    salary: 250000,
    printdetails:function(){
        console.log(`${this.name} is working in ${this.companyname} at a slary of ${this.salary} `)
        console.log(this)
    }
}
console.log(Userdetails)
console.log(Userdetails.name)
Userdetails.printdetails()
Userdetails.name="Mohit"
Userdetails.printdetails()


console.log(this)
//browser global object is windows object

//lets see what output is generated when we use (this) inside a empty function.
// function chai(){
//     console.log(this);
// }
// chai()
// //one mroe example
// function chai(){
//     let username ="Rahul"
//     console.log(this);
//     console.log(this.username); 
// }
// chai() //output undefined this doesnt work inside function ,it works with objects

//lets try with different way of calling a function
const chai = function (){
    let username ="Rahul"
    console.log(this.username)

}
chai() //output undefined  doesnt work 
//notes 
function regularFunc() {
  console.log(this);
}

regularFunc(); // 🔴 Logs the global object (in browser: `window`, in Node.js: `{}`)


const arrowFunc = () => {
  console.log(this);
}

arrowFunc(); // 🔴 Also logs the global object (same as above)

//points
// So in direct/standalone use, there's no practical difference in this — but in callbacks, methods, or classes, arrow functions behave differently.
// If you use this inside a function, the difference becomes visible when the function is inside another object or class, OR inside an event/callback.



// const user = {
//   name: "Rahul",
//   regularFunc: function () {
//     console.log("Regular:", this.name);
//   },
//   arrowFunc: () => {
//     console.log("Arrow:", this.name);
//   }
// };

// user.regularFunc(); // ✅ "Regular: Rahul"
// user.arrowFunc();   // ❌ "Arrow: undefined" (because `this` is not from `user`, but from global)


//price arrow
function user(name){
    console.log(this.name);
}
user("rahul")
const userdetails =function(name,salary){
    console.log(`${this.name} has salary of ${salary}`)
}
userdetails("rahul",5500000)


//this  is not suitable for functions
//let see with the objects

const thisinobject ={
    companyname:"Asus",
    model:"Asus vivobook 15",
    price:55000,
    printdetails:function(){
        console.log(`Company Name:${this.companyname} Model:${this.model} Price:${this.price} `)
    }
}
thisinobject.printdetails()
thisinobject.model="zenbook 15"
thisinobject.price=85000
thisinobject.printdetails()

//as in the above example we can see this works completely fine with objects.



//lets see arrow function
const newfunc = ()=>{
    let username ="Rahul"
    console.log(this.username)
}
newfunc() //output undefined
const newfunc2 = ()=>{
    let username ="Rahul"
    console.log(this)
}
newfunc2() //output {}
//so far what we have studied
// this is used to refer to current context
//this works great with objects
//this is not prefered to be used with the functions directly ,as the output will be undefined(when console.log(this.varibalename) or {}(if we console.log(this))
// the outputs are same with both normal function and arrow function
//similar behaviour with both aroow and normal fucntion but
//but the behaviour of this (keyword) is different with normal and arrow function when the functions are inside an object.
const chekcthisfuncbehaviou ={
    productname:"leverbelt",
    regularfunction:function(){
        console.log(this.productname);
    },
    arrouwfunction:()=>{
        console.log(this.productname)
    }
}
chekcthisfuncbehaviou.regularfunction() //output : lever belt 
chekcthisfuncbehaviou.arrouwfunction() // undefined
//why the output of the arrow func is undefiend 
//reason
// Arrow function: this inherits from the outer scope
// differnce
//1. Arrow Function	
// this is fixed (lexical)	
// Takes this from the parent scope	
// 2.Regular Function
// this changes (dynamic)
// Depends on who calls it



/////////////////ARROW FUNCTION//////////////////
//BASIC ARROWFUNCTION
const multiplytwo = (num1,num2)=>{
    return num1*num2

}
multiplication = multiplytwo(1,5)
console.log(multiplication)

//ARROW FUNCTION WITH IMPLICIT RETURN
const addtwo =(num1,num2) => num1+num2
console.log(addtwo(2,3))
// Another method of writing arrow function 
const subtwo=(num1,num2)=> (num1-num2) //simply you can remember it as when we use curly brackets {} with the function we have to use return statement 
//  when we use parenthetis () we dont have to use return statement 
//it is  also an arrow funcn with implicit return 
// vey usefull in react 
console.log(subtwo(7,2))

const returnobject =(num1,num2) =>({name:"rahul"})
takeobject =returnobject(1,2)
console.log(takeobject)



