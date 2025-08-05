function saymyname(){  //function fucntion name parantesis(function notation) scope
    firstname = "rahul";
    lastname = "yadav";
    console.log(`My name is ${firstname} ${lastname}`)
}

saymyname()   //function-reference   function executor
// function addtwonumber(num1 ,num2){
//     console.log(num1 + num2)
// }
// function addtwonumber(num1 ,num2){ //taking parameters
//     if (typeof(num1) && typeof(num2) === "number"){
//         sum= num1+num2;
//         console.log(`Sum:${sum}`)
//     }
//     else{
//     console.log(`Invalid Input`)
//     }
// }

// addtwonumber(2,3); //passing arguments
// addtwonumber(2,null);
// addtwonumber("a","b");
// addtwonumber(2,"a");

//function takes parameters
//when we call a function the values we give are called arguments.


//case 1 result will be undefined as the function is no return its simple console.log(printing)
// function addtwonumber(num1,num2){
//     console.log(num1+num2)
// }
// const result =addtwonumber(2,4)
// console.log("Result:",result);

//case 2 function returns
function addtwonumber(num1,num2){
    let result= num1+num2;
    return result;
}
const finalresult= addtwonumber(2,4);
console.log(finalresult);

//one imp point any satement after the return statemnt wont be executed ;
//eg
function triplesum(num1,num2,num3){
    console.log("Triple sum");
    return num1+num2+num3;
    console.log("Triple sum"); //wont be executed the code is unreacable ,any staemnt after thr return statemnt si nver executed;
}
const finalanswer = triplesum(2,3,4);
console.log(finalanswer);

//is a fucntion is returning something that will be excuted by two ways
//1.simply using the console.log and giving the fucntiona nd arguments
//2.take the return output ina na variable and then print that variable.
//simply executing function wont give teh result;


//let se with an example

// function loginuser(username){
//     return `${username} just logged in`
// }
// loginuser("RAHUL") //nothing will be printed
// console.log(loginuser("RAHUL"));
// const userloginmessage = loginuser("RAHUL"); //correct method
// console.log(userloginmessage); //correct method
//  //what if we dont pass any argumnet
//  console.log(loginuser()); //at the place where parameter is getting used in the function undefined will appear
// //output : undefined just logged in 


// // now creating an refined fucntion
// function userloginmessage(username){
//     if (username === undefined){
//         return`enter a username`
//     }
//     return `${username} just logged in `
    
// }

// console.log(userloginmessage());
// console.log(userloginmessage(""));
// console.log(userloginmessage("RAHUL"));


//more industry standard code 
// function userloginmessage(username){
//     if (!username){
//         return`enter a username`
//     }
//     return `${username} just logged in `
// }
// console.log(userloginmessage());
// console.log(userloginmessage(""));
// console.log(userloginmessage("RAHUL"));

//we can also givea default parameter
function userloginmessage(username ="sam"){
    if (!username){ //will never be executed as we have a default parameter always
        return`enter a username`
    }
    return `${username} just logged in `
}
console.log(userloginmessage());
console.log(userloginmessage(""));
console.log(userloginmessage("RAHUL"));


