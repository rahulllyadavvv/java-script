//(IIFE) Immediately Invoked Function Expression
//iife are function which are executed emediately 
//sometimes in the cases like database connection  we want immediate connection (function to be executed immediately) 
// and we doesnt  want any global element to cause any polution inside our function in those such cases we use IIFE
//if someone asks what is iffe
//ans-iffe stands for immediately invoked function expression 
//and it is used bcs sometimes polution is caused by global scope(global variables,declarations) so to prevent it we use iffe
//syntax () () ,first parenthetis is for function defination and the second one is function executor
(function dbstatus(){
    console.log("DATABASE CONNECTED")
}) (); //semicolon(;) is important as iife funcn doesnt know when to stop the context so to end this we must use semicolon(;)

//lets see what happens if we dont use semicolon 
// (function myself (){
//     console.log("My name is javascipt")
// }) ()
//  (()=>{
//     console.log("hey i am an arrow function")
//  })()
 //eroor occurs

 //it will work completely fine when used with semicolon ,no issue of context
 //lets test

 //whever writing two IIFE conseqently make sure to use semicolon 
 //a single IIFE will work completly fine without semicolo but wehn two IIFE are used semicoln is must
(function myself (){  //named IIFE
    console.log("My name is javascript")
}) ();
 (()=>{ //unnamed IIFE
    console.log("Hey i am an arrow function")
 })();


((username)=>{   //Passing parameter in IIFE
    console.log(`Hey ${username} you are doing javascript`)
})("Rahul");